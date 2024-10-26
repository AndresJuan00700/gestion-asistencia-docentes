import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainpagedocentecomponent } from './docente/pages/main-page-docente';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

{path:'', component: LoginComponent},
{path:'main', component: mainpagedocentecomponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
