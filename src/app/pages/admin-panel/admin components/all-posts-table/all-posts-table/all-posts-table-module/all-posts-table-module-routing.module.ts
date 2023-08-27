import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoryTableComponent } from '../../../all-category-table/all-category-table.component';


const routes: Routes = [
  {
    path: "",
    component: AllCategoryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPostsTableModuleRoutingModule { }
