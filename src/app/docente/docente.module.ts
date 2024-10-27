import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrarAsistenciaDocenteComponent } from './components/registrar-asistencia-docente/registrar-asistencia-docente.component';
import { mainpagedocentecomponent } from './pages/main-page-docente.component';
import { RegistrarNovedadDocenteComponent } from './components/registrar-novedad-docente/registrar-novedad-docente.component';
import { SidebarModule } from "../sidebar/sidebar.module";




@NgModule({
  declarations: [
mainpagedocentecomponent,
RegistrarAsistenciaDocenteComponent,
RegistrarNovedadDocenteComponent,





  ],
exports:[

mainpagedocentecomponent,


],

  imports: [
    CommonModule,
    RouterModule,
    SidebarModule
]
})
export class DocenteModule { }
