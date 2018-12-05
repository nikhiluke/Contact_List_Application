import { Component, OnInit, Input } from '@angular/core';
import { ContactModel } from '../../../../model/contact.model';
import { ListOfContactsService } from "../../../../shared/List-Of-Contacts.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contactPerson: ContactModel;
  constructor(
    private contactObj: ListOfContactsService,
    private route: Router,
    ) { }

  ngOnInit() {
    this.contactPerson = this.contactObj.getContactElement();
  }

  editContact(){
    this.contactObj.setContactElement(this.contactPerson);
    this.route.navigate(['/edit-contact']);
  }

  deleteContact(){
    this.contactObj.deleteContact(this.contactPerson.id);
    this.contactPerson = null;
    this.route.navigate(['/list-of-contact']);
  }
}
