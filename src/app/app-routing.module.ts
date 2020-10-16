import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublisherComponent } from './screens/publisher/publisher.component';
import { PublisherAddComponent } from './screens/publisher-add/publisher-add.component';
import { PublisherEditComponent } from './screens/publisher-edit/publisher-edit.component';
import { BookComponent } from './screens/book/book.component';
import { BookAddComponent } from './screens/book-add/book-add.component';
import { BookEditComponent } from './screens/book-edit/book-edit.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PublisherComponent
  },
  
  {
    path: 'publisher-add',
    component: PublisherAddComponent
  },
  {
    path: 'publisher/edit/:id',
    component: PublisherEditComponent
  },
  {
    path: 'publishers/:pId/books',
    component: BookComponent
  },
  {
    path: 'publishers/:pId/add-books',
    component: BookAddComponent
  },
  {
    path: 'publishers/:pId/edit-books/:id',
    component: BookEditComponent
  },
 
  {
    path: 'LoginComponent',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
