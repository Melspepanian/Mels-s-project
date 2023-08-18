import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { CategoryComponent } from './category/category.component';
import { JoinComponent } from './join/join.component';
import { HomePostsComponent } from './home-posts/home-posts.component';
import { PostsComponent } from './posts/posts.component';
import { ReadsComponent } from './reads/reads.component';
import { KnowComponent } from './know/know.component';
import { TagsComponent } from './tags/tags.component';
import { SecondCategoryComponent } from './second-category/second-category.component';
import { SecondPostComponent } from './second-post/second-post.component';
import { AuthorsPostComponent } from './authors-post/authors-post.component';



@NgModule({
  declarations: [
    AuthorsComponent,
    CategoryComponent,
    JoinComponent,
    HomePostsComponent,
    PostsComponent,
    ReadsComponent,
    KnowComponent,
    TagsComponent,
    SecondCategoryComponent,
    SecondPostComponent,
    AuthorsPostComponent

  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
