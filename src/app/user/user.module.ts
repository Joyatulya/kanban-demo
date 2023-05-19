import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { GoogleSignInDirective } from './google-sign-in.directive';
import { EmailLoginComponent } from './email-login/email-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { SnackbarService } from '../services/snackbar.service';

@NgModule({
  declarations: [
    LoginComponent,
    GoogleSignInDirective,
    EmailLoginComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ]
})
export class UserModule { }
