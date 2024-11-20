import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CordinadoragregarasistenciasComponent } from './pages/cordinadoragregarasistencias/cordinadoragregarasistencias.component';
import { AsistenciasComponent } from './pages/asistencias/asistencias.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';

const routes: Routes = [

{ path: '',
  component: LayoutPageComponent,
  children: [

{path: 'agregar', component: CordinadoragregarasistenciasComponent},
{path:'asistencias', component: AsistenciasComponent},
{path:'novedades', component: NovedadesComponent}
  ]




}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CordinadorRoutingModule { }
