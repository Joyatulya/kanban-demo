import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, User } from '@angular/fire/auth';
import { GoogleSignInDirective } from '../google-sign-in.directive';
import { AuthService } from '../auth.service';
import { async, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  private name: string = 'Abhi koi nahi';

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { 
  }

  get userName() {
    console.log(this.afAuth.authState)
    return this.name
  }
  

}
