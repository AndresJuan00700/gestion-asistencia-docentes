import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./Loginpage.Component.css']
})
export class LoginpageComponent {
  email: string = '';
  public password: string = '';

  constructor(private router: Router) {}

  goToMain() {
    if (this.email === 'docente@gmail.com' && this.password === 'prueba') {
      this.router.navigate(['./docentes']);
    }
    else if (this.email === 'rector@gmail.com' && this.password === 'prueba') {
      this.router.navigate(['./rector']);
    }
    else if (this.email === 'cordinador@gmail.com' && this.password === 'prueba') {
      this.router.navigate(['./cordinador']);
    }

     else {
       alert('Email o contraseña incorrectos');
     }
  }
}
