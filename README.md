# Contact_List_Application
This application is used to store contact details. This application is hosted on firebase please click on the below link to see it working *(https://contact-application-427b2.firebaseapp.com)*

# Following features are provided by this application:

  1. Responsive application -
      Contact list application is a responsive application. User expreience will not get hamper on any device i.e (mobile device,
      Tablets, Medium size desktop, Large size Desktop). Bootstrap is used to make it responsive.
      *Please checkout this application in your mobile device( https://contact-application-427b2.firebaseapp.com).*
      
  2. List Of Contact -
     List Of Contact is default page of application. You will see list of contact is sorted by first name in AtoZ order.
     Also scroll bar is given to facilate user to see contacts without scrolling entire page. Every Contact itself is a link, which will 
     navigate user to a different page called "Contact page". 
  
  3. Add Contact Functionality - 
     Add Contact Functionality link is on header. User can add any contact by using this link. Add contact page is a form with 
     validation. In form we have used First Name, Last Name, Email & Phone Number. Each field is required, Email should be in email
     format (XX@G.com) and mobile number need to be 10 digit. Error Message are on focusout of field. Save button will be disabled
     untill form gets valid. A cancle link is also provided to cancel the process, it will navigate user back to list of contact 
     page.List of Contact will automatically get sorted after you delete a contact.
  
  4. Edit Contact Functionality - 
     To edit any contact you need to select one of the contact from contact list. After selecting one of the contact you will navigate 
     to "Contact Page" where you can see details of selected contact. Below the details you will see "edit contact button". By click on 
     that button you will navigate to update contact page(FYI: This is the same page used for add contact functionality. Page title, 
     Button text and functionality are getting update dynamically. This make application faster.)List of Contact will automatically get 
     sorted after you edit a contact.
  
  5. Delete Contact Functionality - 
     To delete any contact you need to select one of the contact from contact list. After selecting one of the contact you will navigate
     to "Contact Page" where you can see details of selected contact. Below the details you will see "delete contact button". By 
     clicking on that link you delete selected contact. List of Contact will automatically get sorted after you delete a contact.
     
  6. Search Contact Functionality -
     To search any contact from list of contact, Search bar is given on header. User can type first name of contact to search it in 
     list. If contact is not found simply error is shown on the screen.
     
# Steps to run application on local machine.
  Prerequisite Node.js version 6.11.4 and Visual Studio Code latest version
  1. In CMD run this command *"npm intsall -g @angular/cli@1.4.7."* this will install angular/cli gobally.
  2. Clone the github project (https://github.com/nikhiluke/Contact_List_Application.git)
  3. Goto the folder structure  (drive:\Contact_List_Application\contact-application) from here open CMD.
  4. In CMD run this command *"npm install"*. this will install all the project dependencies.
  5. After installation is complete run this command in cmd *"ng serve -open"*. this will build application locally and open it on
     localhost:4200 in your default browser. Or you can type localhost:4200 in your browser.
     
     
