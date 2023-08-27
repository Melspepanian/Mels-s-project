import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsTableComponent } from '../tags-table.component';

const routes: Routes = [
  {
    path: "",
    component: TagsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsTableModuleRoutingModule { }
