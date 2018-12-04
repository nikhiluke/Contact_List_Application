import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfContactsComponent } from './contacts-component/list-of-contacts/list-of-contacts.component';
import { AddEditContactComponent } from "./contacts-component/add-edit-contact/add-edit-contact.component";
import { EditContactResolverService } from "../shared/edit-contact-resolver.service";
import { ContactComponent } from "./contacts-component/list-of-contacts/contact/contact.component";
import { SearchListComponent } from "./contacts-component/search-list/search-list.component";


const approutes: Routes  = [
  {
    path: '',
    component: ListOfContactsComponent
  },
  {
    path: 'list-of-contact',
    component: ListOfContactsComponent
  },
  {
    path: 'searched-list',
    component: SearchListComponent
  },
  {
    path: 'add-contact',
    component: AddEditContactComponent
  },
  {
    path: 'edit-contact',
    component: AddEditContactComponent,
    resolve: {data: EditContactResolverService}
  },
  {
    path: 'contact',
    component: ContactComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(approutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
