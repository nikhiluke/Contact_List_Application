import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../../model/contact.model';
import { ListOfContactsService } from '../../../shared/List-Of-Contacts.service';

@Component({
  selector: 'app-list-of-contacts',
  templateUrl: './list-of-contacts.component.html',
  styleUrls: ['./list-of-contacts.component.css']
})
export class ListOfContactsComponent implements OnInit {
  
  listOfContactArray: ContactModel[]; 
  sendContact: ContactModel;

  constructor(private contactObj: ListOfContactsService) {}

  ngOnInit() {
    this.listOfContactArray = this.contactObj.getContactArray();
  }
  displayContact(i: number){
    this.sendContact = this.listOfContactArray[i];
  }

}
