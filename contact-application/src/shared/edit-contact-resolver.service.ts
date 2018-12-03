import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ContactModel } from "../model/contact.model";
import { ListOfContactsService } from "./List-Of-Contacts.service";

@Injectable()
export class EditContactResolverService implements Resolve<ContactModel>{
    constructor(private contactObj: ListOfContactsService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):ContactModel{
        return this.contactObj.getContactElement();
    }

}