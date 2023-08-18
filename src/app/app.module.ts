import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { canActivateGuard } from './Guard/can-activate.guard';








const route: Route[] = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren:() => import("./pages/home/home-module/home-module.module").then(m => m.HomeModuleModule)
      },
      {
        path: "blog",
        loadChildren: ( ) => import("./pages/blog/blog-module/blog-module.module").then(m => m.BlogModuleModule)
      },
      {
        path: "blog_post/:id",
        loadChildren:() => import("./pages/blog-post/blog-posts-module/blog-posts-module.module").then(m => m.BlogPostsModuleModule)
      },
      {
        path: "about_us",
        loadChildren:() => import("./pages/about-us/about-us-module/about-us-module.module").then(m => m.AboutUsModuleModule)
      },

      {
        path: "category_page/:id",
        loadChildren: () => import ("./pages/category-page/category-module/category-module.module").then(m => m.CategoryModuleModule)
      },

      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "author/:id",
        loadChildren: () => import ("./pages/author/author-module/author-module.module").then(m => m.AuthorModuleModule)
      },
      {
        path: "privacy_policy",
        component: PrivacyPolicyComponent
      },

    ],

  },
  {
    path: "login-page",
    component: LoginPageComponent,
  },
  {
    path: "admin-panel",
    component: AdminPanelComponent,
    canActivate:[canActivateGuard],
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
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LayoutComponent,
    FooterComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    PrivacyComponent,
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
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route, {scrollPositionRestoration: 'enabled'}),
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
