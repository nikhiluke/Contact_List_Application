import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../../model/contact.model';
import { ListOfContactsService } from '../../../shared/List-Of-Contacts.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-list-of-contacts',
  templateUrl: './list-of-contacts.component.html',
  styleUrls: ['./list-of-contacts.component.css']
})
export class ListOfContactsComponent implements OnInit {
  
  listOfContactArray: ContactModel[]; 
  flowFlag: boolean;

  constructor(
    private contactObj: ListOfContactsService,
    private route: Router,
    private activeRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.listOfContactArray = this.contactObj.getContactArray();
  }
  displayContact(i: number){
    this.contactObj.setContactElement(this.listOfContactArray[i]); 
    this.route.navigate(['contact']);
  }

}
