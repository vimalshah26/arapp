import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  contact: any;

   arListItem:  any;

  _id: string;

  private routeSub:Subscription;

  buttonAction:String;

  profileForm: FormGroup;

  newItem: boolean = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { 

   
  }

 

  ngOnInit() {
  
    this.routeSub = this.route.params.subscribe(params => {
      this._id = params.id;

      if(this._id)
      {
       this.initializeForm(this._id);
        this.buttonAction = 'Save';
      }
      else {

        this.newItem = true;
        this.buttonAction = 'Create';
      }

    });

    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      balance: new FormControl('', Validators.required),
      id: new FormControl('')
    });

    

  }

  

  initializeForm(id) {

    this.contactService.getContact(id).subscribe(data => {

      this.arListItem = data;

        this.profileForm.setValue({
          name: this.arListItem.name,
          balance: this.arListItem.balance,
          id: this.arListItem._id
       })

    })

  }

  onSubmit(){
  
    if(!this.profileForm.value.name)
      this.profileForm.controls['name'].setErrors({'incorrect': true});

    if(!this.profileForm.value.id){
      this.contactService.createContact(this.profileForm.value).subscribe(data => {
        console.log(data);
        this.profileForm.reset();
      });
    }
    else{
      this.contactService.updateContact(this.profileForm.value.id, this.profileForm.value).subscribe(data => {
        console.log(data);
        this.profileForm.reset();
      });
    }
   

  }

}
