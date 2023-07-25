import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
