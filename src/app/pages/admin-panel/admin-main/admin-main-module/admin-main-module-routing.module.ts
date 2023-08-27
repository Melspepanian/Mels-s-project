import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from '../admin-main.component';

const routes: Routes = [
  {
    path:"",
    component: AdminMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMainModuleRoutingModule { }
