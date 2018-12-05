import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfContactsComponent } from './contacts-component/list-of-contacts/list-of-contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEditContactComponent } from './contacts-component/add-edit-contact/add-edit-contact.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contacts-component/list-of-contacts/contact/contact.component';
import { ListOfContactsService } from '../shared/List-Of-Contacts.service';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EditContactResolverService } from "../shared/edit-contact-resolver.service";
import { SendDataService } from "../shared/sendData.service";
import { SearchListComponent } from './contacts-component/search-list/search-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfContactsComponent,
    AddEditContactComponent,
    HeaderComponent,
    ContactComponent,
    SearchListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ListOfContactsService,
    EditContactResolverService,
    SendDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
