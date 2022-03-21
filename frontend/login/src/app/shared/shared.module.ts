import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';


/**
 * This class represents a Shered module
 */
@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorComponent
  ]
})
export class SharedModule { }
