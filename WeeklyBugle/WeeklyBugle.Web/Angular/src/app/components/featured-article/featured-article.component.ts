import { Component, OnInit, Input } from '@angular/core';
import { FeaturedArticle } from '../../models/FeaturedArticle';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.scss']
})
export class FeaturedArticleComponent implements OnInit {

  @Input() featuredArticle: FeaturedArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
