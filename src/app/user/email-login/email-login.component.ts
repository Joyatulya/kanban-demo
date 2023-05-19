import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SnackbarService } from '../../services/snackbar.service';

type formType = 'login' | 'signup' | 'reset';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
})
export class EmailLoginComponent {
  form: FormGroup;
  type: formType = 'login';
  loading = false;

  serverMessage?: any;

  // Transfer to ngOnInIt if this doesn't work
  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private authService: AuthService,
    public snackbar: SnackbarService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []],
    });
  }

  changeType(val: formType) {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value;
    }
  }

  async onSubmit() {
    this.loading = true;
    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        await this.authService.EmailLogin(email, password)
      }
      if (this.isSignup) {
        await this.authService.CreateUserEmail(email, password)
      }
      if (this.isPasswordReset) {
        await this.authService.ResetUserEmail(email)
        this.serverMessage = 'Check your inbox for recovery email'
      }
    } catch (error) {
      this.serverMessage = error;
    }
    this.loading = false;
  }
}
