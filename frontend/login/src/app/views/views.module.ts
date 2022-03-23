import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  exports: [
    ViewsRoutingModule,
    LoginComponent
  ]
})
export class ViewsModule { }
