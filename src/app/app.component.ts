import { Component } from '@angular/core';
import { Article } from './models/article.model';

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

  masterArticleList: Article[] = [

  ]

  readArticle(clickedArticle) {
    this.selectedArticle = clickedArticle;
  }

  finishedReading() {
    this.selectedArticle = null;
  }

}
