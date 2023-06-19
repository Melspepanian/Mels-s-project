import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { JoinComponent } from './components/join/join.component';

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
    JoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
