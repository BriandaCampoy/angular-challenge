import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'createAccount',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
