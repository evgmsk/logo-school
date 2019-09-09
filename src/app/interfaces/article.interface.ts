import {MediaCard} from './media-card.interface';

export interface Article {
  author: string;
  content: string;
  favorites: number;
  comments: any[];
}

export type ArticleType = MediaCard & Article;
