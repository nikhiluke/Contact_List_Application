export class ContactModel{
   public firstName: string;
   public lastName: string;
   public email: string;
   public phoneNumber: number;
   public status: string;
   public id: number;

   constructor(
       id: number,
       firstName: string, 
       lastName: string,
       email: string, 
       phoneNumber: number,
       status: string){
           this.id = id;
           this.firstName = firstName;
           this.lastName = lastName;
           this.email = email;
           this.phoneNumber = phoneNumber;
           this.status = status;
   }
}