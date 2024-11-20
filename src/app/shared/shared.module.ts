import { NgModule } from '@angular/core';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    SidebarComponent
  ],

  exports :[
    Error404PageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
