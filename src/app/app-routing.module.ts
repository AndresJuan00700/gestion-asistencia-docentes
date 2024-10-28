import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { mainpagedocentecomponent } from './docente/pages/main-page-docente.component';
import { LoginComponent } from './login/login.component';
import { RegistrarNovedadDocenteComponent } from './docente/components/registrar-novedad-docente/registrar-novedad-docente.component';
import { RegistrarAsistenciaDocenteComponent } from './docente/components/registrar-asistencia-docente/registrar-asistencia-docente.component';


const routes: Routes = [

{path:'', component: LoginComponent},
{path:'main', component: mainpagedocentecomponent},

{path:'main/novedad', component: RegistrarNovedadDocenteComponent},
{path:'novedad', component: RegistrarNovedadDocenteComponent},
{path:'main/asistencia', component: RegistrarAsistenciaDocenteComponent},
{path:'asistencia', component: RegistrarAsistenciaDocenteComponent},
{path:'**', redirectTo: ''}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
