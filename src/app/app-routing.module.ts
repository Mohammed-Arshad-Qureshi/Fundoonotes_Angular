import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authguard/authentication.guard';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import{ EmailComponent } from './components/email/email.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';


const routes: Routes = [
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotpassword",component:ForgetPasswordComponent},
  {path:"email",component:EmailComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"home",component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:"",redirectTo:"/home/notes",pathMatch:'full'},
    {path:"notes", component:GetAllnotesComponent},
    {path:"archive",component:ArchiveComponent},
    {path:"trash",component:TrashComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
