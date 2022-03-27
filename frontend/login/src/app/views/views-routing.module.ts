import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch: 'full'
  },
  {
    path: 'container',
    component: ContainerComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
