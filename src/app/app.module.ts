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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminMainComponent } from './pages/admin-panel/admin-main/admin-main.component';
import { CategoryTableComponent } from './pages/admin-panel/admin components/category-table/category-table.component';
import { MatTableModule } from '@angular/material/table';
import { AuthorsTableComponent } from './pages/admin-panel/admin components/authors-table/authors-table.component';
import { AllPostsTableComponent } from './pages/admin-panel/admin components/all-posts-table/all-posts-table/all-posts-table.component';
import { ReadNextComponent } from './pages/admin-panel/admin components/read-next/read-next.component';
import { KnowTableComponent } from './pages/admin-panel/admin components/know-table/know-table.component';
import { AllCategoryTableComponent } from './pages/admin-panel/admin components/all-category-table/all-category-table.component';
import { JoinTableComponent } from './pages/admin-panel/admin components/join-table/join-table.component';
import { AuthorsPostsTableComponent } from './pages/admin-panel/admin components/authors-posts-table/authors-posts-table.component';
import { TagsTableComponent } from './pages/admin-panel/admin components/tags-table/tags-table.component';








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
        component: CategoryPageComponent
      },

      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "author/:id",
        component: AuthorComponent
      },
      {
        path: "privacy_policy",
        component: PrivacyPolicyComponent
      },

    ],

  },
  {
    path: "login-page",
    component: LoginPageComponent
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent,
    children: [
      {
        path: "category-table",
        component: CategoryTableComponent
      },
      {
        path: "authors-table",
        component: AuthorsTableComponent
      },
      {
        path: "all-posts",
        component: AllPostsTableComponent
      },
      {
        path: "read-next",
        component: ReadNextComponent
      },
      {
        path: "know-table",
        component: KnowTableComponent
      },
      {
        path:"all-category",
        component: AllCategoryTableComponent
      },
      {
        path: "join-new",
        component: JoinTableComponent
      },
      {
        path: "authors-post",
        component:AuthorsPostsTableComponent
      },
      {
        path: "tags-table",
        component: TagsTableComponent
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
    LoginPageComponent,
    AdminPanelComponent,
    AdminMainComponent,
    CategoryTableComponent,
    AuthorsTableComponent,
    AllPostsTableComponent,

    ReadNextComponent,
    KnowTableComponent,
    AllCategoryTableComponent,
    JoinTableComponent,
    AuthorsPostsTableComponent,
    TagsTableComponent,





  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
