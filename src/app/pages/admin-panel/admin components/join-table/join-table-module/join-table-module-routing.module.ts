import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinTableComponent } from '../join-table.component';

const routes: Routes = [
  {
    path:"",
    component: JoinTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinTableModuleRoutingModule { }
