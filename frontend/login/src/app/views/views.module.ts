import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateUserFormComponent,
    ContainerComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  exports: [
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
