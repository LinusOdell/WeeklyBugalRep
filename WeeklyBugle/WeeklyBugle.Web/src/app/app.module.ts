import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';
import { FeaturedArticleBoxComponent } from './components/featured-article-box/featured-article-box.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedArticleComponent,
    FeaturedArticleBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
