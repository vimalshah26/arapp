import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from '../notification.service';
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
    private notificationService: NotificationService
  ) { 
    
    
  }

  ngOnInit() {
  }

  delete() {
    this.contactService.delete(this.arListItem).subscribe(data => {
      console.log(data);

      this.notificationService.showError("Contact Removed", "Contact has been removed successfully")
      this.deleted.emit(true);

    });
  }

  ngOnChanges(){
    console.log('ng on changes');
  }

  open(){

  }

}
