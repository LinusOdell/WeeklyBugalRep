import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FeaturedArticleBoxComponent = class FeaturedArticleBoxComponent {
    constructor() { }
    ngOnInit() {
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
};
FeaturedArticleBoxComponent = __decorate([
    Component({
        selector: 'app-featured-article-box',
        templateUrl: './featured-article-box.component.html',
        styleUrls: ['./featured-article-box.component.css']
    })
], FeaturedArticleBoxComponent);
export { FeaturedArticleBoxComponent };
//# sourceMappingURL=featured-article-box.component.js.map