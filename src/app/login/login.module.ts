import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticateService, UserConrollerService } from '../typescript-angular-client-generated';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule
    
  ],
  providers : [
    AuthenticateService,
    UserConrollerService
  ]
  
})
export class LoginModule { }
