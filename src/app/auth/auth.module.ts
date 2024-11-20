import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutinnModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginpageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutinnModule,
    FormsModule
  ]
})
export class AuthModule { }
