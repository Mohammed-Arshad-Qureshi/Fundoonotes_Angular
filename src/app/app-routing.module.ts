import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginPasswordComponent } from './components/login-password/login-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:"registration",component:RegistrationComponent},
  {path:"loginemail",component:LoginComponent},
  {path:"loginpassowrd",component:LoginPasswordComponent},
  {path:"forget-password",component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
