import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, NgForm, FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UserComponent,
    TableComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
