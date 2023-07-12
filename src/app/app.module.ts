import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { JoinComponent } from './components/join/join.component';
import { Route, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsComponent } from './components/posts/posts.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ReadsComponent } from './components/reads/reads.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SecondCategoryComponent } from './components/second-category/second-category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthorComponent } from './pages/author/author.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TagsComponent } from './components/tags/tags.component';
import { HomePostsComponent } from './components/home-posts/home-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondPostComponent } from './components/second-post/second-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorsPostComponent } from './components/authors-post/authors-post.component';
import { KnowComponent } from './components/know/know.component';


 


const route: Route[] = [
  {
    path: "layout",
    component: LayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "blog",
        component: BlogComponent
      },
      {
        path: "blog_post/:id",
        component: BlogPostComponent
      },
      {
        path: "about_us",
        component: AboutUsComponent
      },
     
      {
        path: "category_page/:id",
        component:CategoryPageComponent
      },
     
      {
        path: "contact",
        component:ContactComponent
      },
      {
        path:"author/:id",
        component:AuthorComponent
      },
      {
        path: "privacy_policy",
        component:PrivacyPolicyComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    AuthorsComponent,
    JoinComponent,
    BlogComponent,
    PostsComponent,
    BlogPostComponent,
    ReadsComponent,
    AboutUsComponent,
    CategoryPageComponent,
    SecondCategoryComponent,
    ContactComponent,
    AuthorComponent,
    PrivacyPolicyComponent,
    PrivacyComponent,
    TagsComponent,
    HomePostsComponent,
    SecondPostComponent,
    AuthorsPostComponent,
    KnowComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
