import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComponent } from './table/table.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      },
      {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'edit-users/:id',
        component:EditUsersComponent
      },
      {
        path: 'users',
        component:UsersComponent
      },
      {
        path: 'detailed-view/:id',
        component:DetailedViewComponent
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent //path vetayana vani yo page ma janxa direct yaslai Wild Card Route vanxa
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
