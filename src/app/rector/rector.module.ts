import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RectorRoutingModule } from './rector-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


import { RectorAsistenciasComponent } from './pages/asistencias/asistencias.component';
import { RectorNovedadesComponent } from './pages/novedades/novedades.component';
import { SharedModule } from '../shared/shared.module';
import { RectorAgregarasistenciasComponent } from './pages/agregarasistencias/agregarasistencias.component';
import { RectorAgregarnovedadesComponent } from './pages/agregarnovedades/agregarnovedades.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [
    LayoutPageComponent,
    RectorAsistenciasComponent,
    RectorNovedadesComponent,
    RectorAgregarasistenciasComponent,
   RectorAgregarnovedadesComponent
  ],

  imports: [
    CommonModule,
    RectorRoutingModule,
    SharedModule,
    ZXingScannerModule
  ]
})
export class RectorModule { }
