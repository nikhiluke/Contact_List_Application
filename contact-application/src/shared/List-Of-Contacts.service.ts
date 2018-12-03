import { ContactModel } from '../model/contact.model';

export class ListOfContactsService {
    contactElement: ContactModel;
    ContactListArray: ContactModel[] = [
    new ContactModel(0,'Nikhil','Uke','nikhiluke@gmail.com',7798646011,'Active'),
    new ContactModel(1,'Nikhil','Uke','nikhiluke@gmail.com',7798646011,'Active'),
    new ContactModel(2,'Nikhil','Uke','nikhiluke@gmail.com',7798646011,'Active'),
    new ContactModel(3,'Nikhil','Uke','nikhiluke@gmail.com',7798646011,'Active'),
    new ContactModel(4,'Nikhil','Uke','nikhiluke@gmail.com',7798646011,'Active'),
    ]

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
      return this.ContactListArray;
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
}