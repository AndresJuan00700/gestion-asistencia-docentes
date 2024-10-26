import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarAsistenciaDocenteComponent } from './components/registrar-asistencia-docente/registrar-asistencia-docente.component';
import { mainpagedocentecomponent } from './pages/main-page-docente';
import { RegistrarNovedadDocenteComponent } from './components/registrar-novedad-docente/registrar-novedad-docente.component';




@NgModule({
  declarations: [
mainpagedocentecomponent,
RegistrarAsistenciaDocenteComponent,
RegistrarNovedadDocenteComponent,



  ],
exports:[

mainpagedocentecomponent

],

  imports: [
    CommonModule

  ]
})
export class DocenteModule { }
