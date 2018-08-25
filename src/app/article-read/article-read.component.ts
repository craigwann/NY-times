import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';



@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css'],
  providers: [ArticleService]
})
export class ArticleReadComponent implements OnInit {
  @Input() childArticleRead: Article;
  @Output() clickedDone = new EventEmitter();
  articles: FirebaseListObservable<any[]>;
  articleId: number = null;
  currentRoute: string = this.router.url;


  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  finishedReading() {
    this.clickedDone.emit();
  }
  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.id]);
  }

}
