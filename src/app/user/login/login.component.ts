import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';

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
    return this.name
  }
  

}
