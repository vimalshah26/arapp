import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { menuModelList } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:any;
  userInitial:string;

  menuItems = menuModelList;

  constructor(
     authService: AuthService
  ) {

    this.user = authService.user;
    if(this.user){
      this.userInitial = this.user.firstName.slice(0,1) + this.user.lastName.slice(0,1);
    }

   }

  ngOnInit() {
  }

}
