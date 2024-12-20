


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

const routes: Routes =[

{

  path: '',
  component: LayoutPageComponent,
  children: [

    {path:'login', component:  LoginpageComponent},
    {path:'**', redirectTo: 'login' }
    ]

}

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],


})
export class AuthRoutinnModule { }
