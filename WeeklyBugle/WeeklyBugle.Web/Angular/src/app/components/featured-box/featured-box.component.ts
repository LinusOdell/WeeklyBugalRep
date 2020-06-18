import { Component, OnInit } from '@angular/core';
import { FeaturedArticle } from '../../models/FeaturedArticle';

@Component({
  selector: 'app-featured-box',
  templateUrl: './featured-box.component.html',
  styleUrls: ['./featured-box.component.scss']
})
export class FeaturedBoxComponent implements OnInit {

  featuredArticles: FeaturedArticle[];

  constructor() { }

  ngOnInit(): void {
    this.featuredArticles = [
      {
        id: 0,
        title: "The answer to 1984",
        image: "American_Flag.jpg"
      },
      {
        id: 1,
        title: "When a vibe check goes too far",
        image: "waco.jpg"
      }
    ]
  }

}
