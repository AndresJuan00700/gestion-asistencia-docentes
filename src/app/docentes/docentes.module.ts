import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentePageComponent } from './pages/docente-page/docente-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegistrodocenteComponent } from './pages/registrodocente/registrodocente.component';

import { SharedModule } from "../shared/shared.module";
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [
    DocentePageComponent,
    LayoutPageComponent,
    RegistrodocenteComponent,

  ],
  imports: [
    CommonModule,
    DocentesRoutingModule,
    SharedModule,
    ZXingScannerModule

]
})
export class DocentesModule { }
