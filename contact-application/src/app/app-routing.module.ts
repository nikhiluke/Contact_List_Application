import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfContactsComponent } from './contacts-component/list-of-contacts/list-of-contacts.component';
import { AddEditContactComponent } from "./contacts-component/add-edit-contact/add-edit-contact.component";
import { EditContactResolverService } from "../shared/edit-contact-resolver.service";


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
    path: 'add-contact',
    component: AddEditContactComponent
  },
  {
    path: 'edit-contact',
    component: AddEditContactComponent,
    resolve: {data: EditContactResolverService}
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(approutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
