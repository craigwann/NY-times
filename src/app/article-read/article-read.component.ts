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

  articleId: number = null;

  constructor(private route: ActivatedRoute, private location: Location, private ArticleService: ArticleService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = parseInt(urlParameters['id']);
    });
  }
  finishedReading() {
    this.clickedDone.emit();
  }


}
