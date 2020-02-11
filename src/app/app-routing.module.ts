import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { RegisterUserListComponent } from './register-user-list/register-user-list.component';


const routes: Routes = [

	{path: 'register', component: RegisterComponent},
	{path: 'registerUserList', component: RegisterUserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
