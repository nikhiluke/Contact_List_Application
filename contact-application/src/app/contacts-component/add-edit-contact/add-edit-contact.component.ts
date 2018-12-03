import { Component, OnInit } from '@angular/core';
import { ListOfContactsService } from "../../../shared/List-Of-Contacts.service";
import { Router, ActivatedRoute, Data } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactModel } from '../../../model/contact.model';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {

  contactForm: FormGroup;
  pageTitle: string;
  buttonText: string;
  contactElement: ContactModel = null;
  id: number;

  constructor(
    private contactObj: ListOfContactsService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.contactElement = data['data'];
        this.setFormGroup(this.contactElement);
      }
    )
  }
  setFormGroup(formObj: ContactModel){
    if(formObj){
        this.pageTitle = 'Update Contact Details';
        this.buttonText = 'Update Contact'
        this.id = formObj.id;
        this.contactForm = new FormGroup({
        'firstName': new FormControl(formObj.firstName, Validators.required),
        'lastName': new FormControl(formObj.lastName, Validators.required),
        'email': new FormControl(formObj.email, [Validators.required, Validators.email]),
        'phoneNumber': new FormControl(formObj.phoneNumber, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
          ]),   
        });
    }else{
        this.pageTitle = 'Add Contact Details';
        this.buttonText = 'Save Contact'
        this.id = this.contactObj.getArrayLength(),
        this.contactForm = new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phoneNumber': new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
          ]),   
        });
    }
  }

  onFormSubmit(){
    let contactElement = new ContactModel(
      this.id,
      this.contactForm.controls['firstName'].value,
      this.contactForm.controls['lastName'].value,
      this.contactForm.controls['email'].value,
      this.contactForm.controls['phoneNumber'].value,
      'Active'
    );
    console.log(this.route.url);
    if(this.route.url === '/edit-contact'){
      this.contactObj.updateContact(contactElement);
    }else{
      this.contactObj.addContact(contactElement);
    }
    this.route.navigate(['/list-of-contact']);
  }

}
