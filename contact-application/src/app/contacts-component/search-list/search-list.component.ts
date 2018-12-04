import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../../model/contact.model';
import { ListOfContactsService } from '../../../shared/List-Of-Contacts.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SendDataService } from "../../../shared/sendData.service";
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  listOfContactArray: ContactModel[]=[];
  flowFlag=false; 

  constructor(
    private contactObj: ListOfContactsService,
    private route: Router,
    private sendDataObj: SendDataService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      (params:Params)=>{
        this.flowFlag = Boolean(params['flowFlag']);
      }
    )
    this.listOfContactArray.push(this.contactObj.getContactElement());
   }
  displayContact(i: number){
    this.contactObj.setContactElement(this.listOfContactArray[i]); 
    this.route.navigate(['contact']);
  }
}
