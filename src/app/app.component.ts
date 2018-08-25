import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { Article } from './models/article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NY Times';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  date: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  day: number = this.currentTime.getDay();

  selectedArticle = null;
  masterArticleList: Article[];

  constructor() { }

  ngOnInit() {
  }


  readArticle(clickedArticle) {
    this.selectedArticle = clickedArticle;
  }

  finishedReading() {
    this.selectedArticle = null;
  }

}
