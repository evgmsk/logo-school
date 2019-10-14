import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {ArticleType} from '../../../interfaces/article.interface';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeBlogComponent implements OnInit {
  articles: Observable<ArticleType[]>;
  constructor(private store: Store<{articlers: ArticleType[]}>) { }

  ngOnInit() {
    this.articles = this.store.select('articles');
  }

}
