import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsPostsTableComponent } from '../authors-posts-table.component';

const routes: Routes = [
  {
    path: "",
    component: AuthorsPostsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsPostsTableModuleRoutingModule { }
