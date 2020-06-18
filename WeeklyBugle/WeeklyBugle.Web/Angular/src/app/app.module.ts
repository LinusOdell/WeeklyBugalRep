import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturedBoxComponent } from './components/featured-box/featured-box.component';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedBoxComponent,
    FeaturedArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
