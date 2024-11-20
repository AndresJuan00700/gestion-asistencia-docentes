import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RectorAsistenciasComponent } from './pages/asistencias/asistencias.component';
import { RectorNovedadesComponent } from './pages/novedades/novedades.component';
import { RectorAgregarasistenciasComponent } from './pages/agregarasistencias/agregarasistencias.component';
import { RectorAgregarnovedadesComponent } from './pages/agregarnovedades/agregarnovedades.component';

const routes: Routes = [
{path: '',
component: LayoutPageComponent,
children:[

  {path:'agregar', component: RectorAgregarasistenciasComponent},
  {path:'agregarnovedades', component: RectorAgregarnovedadesComponent},
  {path:'asistencias', component: RectorAsistenciasComponent},
  {path:'novedades', component: RectorNovedadesComponent}
]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RectorRoutingModule { }
