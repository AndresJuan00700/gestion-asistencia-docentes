import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { SidebarModule } from "../sidebar/sidebar.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports:[
LoginComponent

  ],
  imports: [
    CommonModule,

    FormsModule,
    RouterModule,
    SidebarModule
]

})
export class LoginModule { }
