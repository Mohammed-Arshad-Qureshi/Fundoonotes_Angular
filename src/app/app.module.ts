import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './components/email/email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNodeComponent } from './components/create-node/create-node.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { IconsComponent } from './components/icons/icons.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

import { AuthguardService } from './services/authguard/authguard.service';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { AddlabelComponent } from './components/addlabel/addlabel.component';
import { GetAllLabelsComponent } from './components/get-all-labels/get-all-labels.component';
import { GetNotebyidComponent } from './components/get-notebyid/get-notebyid.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    EmailComponent,
    DashboardComponent,
    CreateNodeComponent,
    DisplayNoteComponent,
    GetAllnotesComponent,
    IconsComponent,
    EditNoteComponent,
    ArchiveComponent,
    TrashComponent,
    AddlabelComponent,
    GetAllLabelsComponent,
    GetNotebyidComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
