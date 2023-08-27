import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminPanelComponent } from './admin-panel.component';
import { AllCategoryTableComponent } from './admin components/all-category-table/all-category-table.component';
import { AllPostsTableComponent } from './admin components/all-posts-table/all-posts-table/all-posts-table.component';
import { AuthorsPostsTableComponent } from './admin components/authors-posts-table/authors-posts-table.component';
import { AuthorsTableComponent } from './admin components/authors-table/authors-table.component';
import { CategoryTableComponent } from './admin components/category-table/category-table.component';
import { JoinTableComponent } from './admin components/join-table/join-table.component';
import { KnowTableComponent } from './admin components/know-table/know-table.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminMainComponent,
    AllCategoryTableComponent,
    AllPostsTableComponent,
    AuthorsPostsTableComponent,
    AuthorsTableComponent,
    CategoryTableComponent,
    JoinTableComponent,
    KnowTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminComponentsModule { }
