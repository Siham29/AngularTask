import { CalcAgePipe } from './../calc-age.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, NgForm, FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { UserConrollerService } from '../typescript-angular-client-generated';




@NgModule({
  declarations: [UserComponent,
    TableComponent,
    CalcAgePipe
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],  providers: [ CalcAgePipe , UserConrollerService]
})
export class MainModule { }
