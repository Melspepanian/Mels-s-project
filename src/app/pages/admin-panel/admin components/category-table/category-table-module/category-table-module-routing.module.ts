import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryTableComponent } from '../category-table.component';

const routes: Routes = [
  {
    path:"",
    component: CategoryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryTableModuleRoutingModule { }
