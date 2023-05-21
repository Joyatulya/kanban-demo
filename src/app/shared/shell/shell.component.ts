import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, switchAll, switchMap } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  user?: firebase.User | null;
  isLoggedIn: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth
  ) {
    this.currentUser()
  }

  async currentUser() {
    const cu = await this.afAuth.currentUser;
    this.user = cu
    this.isLoggedIn = !!this.user
    console.log(cu, this.isLoggedIn)
  }
}
