import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent {
  @Input() childArticleList: Article[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteArticles";
  articles: FirebaseListObservable<any[]>;


  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  readButtonClicked(articleToRead: Article) {
    this.clickSender.emit(articleToRead);
  }

  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}

  toggleDone(clickedArticle: Article, setCompleteness: boolean) {
       clickedArticle.done = setCompleteness;
    }


}
