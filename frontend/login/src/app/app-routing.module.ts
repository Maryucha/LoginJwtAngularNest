import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';

/**
 * This const represents all  this module
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./views/views.module').then((m) => m.ViewsModule)
  },
  {
    path: '**',
    component:ErrorComponent
  }
];

/**
 * This class represents the router file this module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
