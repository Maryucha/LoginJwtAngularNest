import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    ContainerComponent,
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
