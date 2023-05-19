import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider : any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been logged in');
      })
      .catch((e) => console.log(e));
  }

  async EmailLogin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  async CreateUserEmail(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  async ResetUserEmail(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
  }
}
