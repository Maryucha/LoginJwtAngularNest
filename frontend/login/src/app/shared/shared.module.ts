import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * This class represents a Shered module
 */
@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [
    ErrorComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule
  ],
  providers: [
    UserService,AuthService
  ]
})
export class SharedModule { }
