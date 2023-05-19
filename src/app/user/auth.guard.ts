import { CanActivateFn } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export async function authGuard (route : any, state: any) {

  const snackbar = inject(SnackbarService);
  const afAuth = inject(AngularFireAuth);
  const user = await afAuth.currentUser;
  const isLoggedIn = !!user;
  if (!isLoggedIn) {
    snackbar.authError()
  }
  return isLoggedIn;
}
