import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CordinadorRoutingModule } from './cordinador-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { CordinadoragregarasistenciasComponent } from './pages/cordinadoragregarasistencias/cordinadoragregarasistencias.component';
import { ZXingScannerComponent, ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    LayoutPageComponent,
    CordinadoragregarasistenciasComponent,

  ],
  imports: [
    CommonModule,
    CordinadorRoutingModule,
    SharedModule,
    ZXingScannerModule
  ]
})
export class CordinadorModule { }
