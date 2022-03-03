import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailedViewComponent } from './detailed-view/detailed-view.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    AddUserComponent,
    EditUsersComponent,
    PageNotFoundComponent,
    UsersComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
