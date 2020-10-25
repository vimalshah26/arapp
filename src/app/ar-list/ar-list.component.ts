import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-ar-list',
  templateUrl: './ar-list.component.html',
  styleUrls: ['./ar-list.component.css']
})
export class ArListComponent implements OnInit {

  arListItems: any;


  constructor(
    private contactService: ContactService
  ) { 

    this.loadData();
    this.contactService.dataChangeObservable.subscribe();
    

  }

  ngOnInit() {
  }

  onDeleted(){
    console.log('in delted');
    this.loadData();
  }

  loadData(){
    this.contactService.getContacts().subscribe((data) =>{
      console.log(data);
       this.arListItems = data;
    });
  }

}
