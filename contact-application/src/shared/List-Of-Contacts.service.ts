import { ContactModel } from '../model/contact.model';

export class ListOfContactsService {
    contactElement: ContactModel;
    searchedListArray: ContactModel[]=[];
    sortedListArray: ContactModel[]=[]; 
    ContactListArray: ContactModel[] = [
    new ContactModel(3,'G','H','gh@.com',7798646011,'Active'),
    new ContactModel(1,'C','D','CD@gmail.com',7798646011,'Active'),
    new ContactModel(4,'I','J','ij@gmail.com',7798646011,'Active'),
    new ContactModel(2,'E','F','EF@gmail.com',7798646011,'Active'),
    new ContactModel(0,'A','B','AB@gmail.com',7798646011,'Active'),
    ]

    constructor(){
        this.sortedListArray = this.ContactListArray.sort(function(a,b){
           let a1 = a.firstName.toLowerCase();
           let b1 = b.firstName.toLowerCase();
           if(a1<b1){
               return -1;
           }
           if(a1>b1){
               return 1;
           }
           return 0;
        })
    }

  addContact(contactElemen: ContactModel){
      this.ContactListArray.push(contactElemen);
  }
  updateContact(contactElemen: ContactModel){
      this.ContactListArray.splice(contactElemen.id, 1 ,contactElemen);
  }
  deleteContact(index: number){
      this.ContactListArray.splice(index, 1);
  }
  getContactArray(){
      return this.sortedListArray;
  }
  setContactElement(ContactObj: ContactModel){
      this.contactElement = ContactObj;
  }
  getContactElement(){
      return this.contactElement;
  }
  getArrayLength(){
      return this.ContactListArray.length;
  }
  searchedContact(searchValue: string){
      let isValueFound = this.sortedListArray.find(
          item => item.firstName.toLowerCase() === searchValue.toLowerCase());
    
    if(isValueFound){
        this.contactElement = isValueFound;
        return true;
    } else{
        return false;
    }
  }
}