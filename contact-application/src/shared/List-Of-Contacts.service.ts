import { ContactModel } from '../model/contact.model';

export class ListOfContactsService {
    contactElement: ContactModel;
    searchedListArray: ContactModel[]=[];
    sortedListArray: ContactModel[]=[];
    ContactListArray: ContactModel[] = [
    new ContactModel(0,'G','H','gh@gmail.com',7798646011,'Active'),
    new ContactModel(1,'C','D','CD@gmail.com',7798646011,'Active'),
    new ContactModel(2,'I','J','ij@gmail.com',7798646011,'Active'),
    new ContactModel(3,'E','F','EF@gmail.com',7798646011,'Active'),
    new ContactModel(4,'A','B','AB@gmail.com',7798646011,'Active'),
    ]

    constructor(){
      this.sortArray();
    }

  addContact(contactElemen: ContactModel){
      this.ContactListArray.push(contactElemen);
      this.sortArray();
  }
  updateContact(contactElemen: ContactModel){
    let isValueFound = this.ContactListArray.findIndex(
        item => item.id === contactElemen.id);
      this.ContactListArray.splice(isValueFound, 1 ,contactElemen);
      this.sortArray();
  }
  deleteContact(index: number){
    let isValueFound = this.ContactListArray.findIndex(
        item => item.id === index);
      this.ContactListArray.splice(isValueFound, 1);
      this.sortArray();
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
  sortArray(){
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
}
