import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path: 'List', component: TableComponent },
{ path: 'List/:id', component: UserComponent ,pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
