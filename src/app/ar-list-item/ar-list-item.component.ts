import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-ar-list-item',
  templateUrl: './ar-list-item.component.html',
  styleUrls: ['./ar-list-item.component.css']
})
export class ArListItemComponent implements OnInit {


  @Input() arListItem;
  @Output() deleted = new EventEmitter<boolean>();

  constructor(
    private contactService: ContactService,
  ) { 
    
    
  }

  ngOnInit() {
  }

  delete() {
    this.contactService.delete(this.arListItem).subscribe(data => {
      console.log(data);

      this.deleted.emit(true);

    });
  }

  ngOnChanges(){
    console.log('ng on changes');
  }

  open(){

  }

}
