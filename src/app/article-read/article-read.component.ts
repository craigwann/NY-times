import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent {
  @Input() childArticleRead: Article;
  @Output() clickedDone = new EventEmitter();

  finishedReading() {
    this.clickedDone.emit();
  }


}
