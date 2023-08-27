import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadNextComponent } from '../read-next.component';

const routes: Routes = [
  {
    path: '',
    component:ReadNextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadNextModuleRoutingModule { }
