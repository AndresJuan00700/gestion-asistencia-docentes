import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  public password: string = '';

  constructor(private router: Router) {}

  goToMain() {
    if (this.email === 'rector@gmail.com' && this.password === 'prueba') {
      this.router.navigate(['/main']);
    } else {
      alert('Email o contraseña incorrectos');
    }
  }
}
