import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean;
  @Output() loginActionNotify = new EventEmitter<any>();

  constructor(private _sessionService: SessionService) {
    this.isLoading = false;
    this.setFormControl();
  }

  setFormControl() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  doLogin() {
    this.isLoading = true;
    this._sessionService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .then(credentials => {
        this.isLoading = false;
        this.loginActionNotify.emit();
      }).catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            this.loginForm.setErrors({
              wrongCredentials: 'Datos de sesión incorrectos. Por favor verifique el correo electrónico ingresado.'
            });
            break;
          case 'auth/wrong-password':
            this.loginForm.setErrors({
              wrongCredentials: 'Datos de sesión incorrectos. Por favor verifique la contraseña ingresada.'
            });
            break;
          default:
            this.loginForm.setErrors({
              wrongCredentials: 'Datos de sesión incorrectos. Por favor verifique los datos ingresados y vuelva a intentarlo.'
            });
            break;
        }
        this.isLoading = false;
      });
  }
}
