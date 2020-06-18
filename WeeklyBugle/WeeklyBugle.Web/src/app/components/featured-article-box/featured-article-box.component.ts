import { Component, OnInit } from '@angular/core';
import { FeaturedArticle } from '../../models/FeaturedArticle';

@Component({
  selector: 'app-featured-article-box',
  templateUrl: './featured-article-box.component.html',
  styleUrls: ['./featured-article-box.component.css']
})
export class FeaturedArticleBoxComponent implements OnInit {

  featuredArticles: FeaturedArticle[];

  constructor() { }

  ngOnInit(): void {
    this.featuredArticles = [
      {
        id: 0,
        title: 'based_freedom',
        image: '~/Content/images/American_Flag.jpg'
      },
      {
        id: 1,
        title: 'When vibe checking goes too far',
        image: '~/Content/images/waco.jpg'
      }
    ];
  }

}
