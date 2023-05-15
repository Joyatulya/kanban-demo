import { Directive, HostListener, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
// import firebase from 'firebase/compat';

@Directive({
  selector: '[appGoogleSignIn]'
})
export class GoogleSignInDirective {

  constructor(private afAuth: AngularFireAuth) { }

  @HostListener('click')
  onClick() {
    // this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log('This shit works')
  }

}
