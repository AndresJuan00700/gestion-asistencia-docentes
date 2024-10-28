import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocenteModule } from "./docente/docente.module";
import { LoginModule } from './login/login.module';

import { SidebarModule } from './sidebar/sidebar.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocenteModule,

    LoginModule,
    SidebarModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
