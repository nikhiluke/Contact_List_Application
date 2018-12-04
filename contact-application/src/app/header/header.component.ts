import { Component, OnInit } from '@angular/core';
import { ListOfContactsService } from "../../shared/List-Of-Contacts.service";
import { Router } from "@angular/router";
import { SendDataService } from "../../shared/sendData.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addIn = false;  
  inputValue: string;
  constructor(
    private route: Router,
    private sendDataObj: SendDataService,
    private contactObj: ListOfContactsService) { }
  ngOnInit() {
  }
  toggleButton() { 
        let boolValue = this.addIn;
        this.addIn = (boolValue === false ? true : false); 
    }
  searchContact(value: string){
    let flag = true;
    this.sendDataObj.sendData.next(value);
    this.inputValue = null;
    flag = this.contactObj.searchedContact(value);
    if(flag){
      this.route.navigate(['/searched-list'], {queryParams:{flowFlag: 'true'}});
    }
  }  
}
