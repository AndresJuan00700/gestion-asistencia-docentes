import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegistrodocenteComponent } from './pages/registrodocente/registrodocente.component';



const routes: Routes = [

{
path: '',
component: LayoutPageComponent,
children:[
{path: 'registro', component:RegistrodocenteComponent},



]

}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
