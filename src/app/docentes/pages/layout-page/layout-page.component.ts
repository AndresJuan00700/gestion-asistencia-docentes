import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  constructor (private router: Router){}

  iraPadre(){
    this.router.navigate(['/auth/login']);
    console.log(this.iraPadre);
  }
}
