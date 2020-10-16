import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublisherComponent } from './screens/publisher/publisher.component';
import { PublisherEditComponent } from './screens/publisher-edit/publisher-edit.component';
import { PublisherAddComponent } from './screens/publisher-add/publisher-add.component';
import { BookComponent } from './screens/book/book.component';
import { BookAddComponent } from './screens/book-add/book-add.component';
import { BookEditComponent } from './screens/book-edit/book-edit.component';
import { LoginComponent } from './screens/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    PublisherEditComponent,
    PublisherAddComponent,
    BookComponent,
    BookAddComponent,
    BookEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
