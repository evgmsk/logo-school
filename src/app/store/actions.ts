import {Action, createAction, props} from '@ngrx/store';

import * as AT from './ActionTypes';
import {StatBanner} from '../interfaces/stat-banner.interface';
import {PersonCard} from '../interfaces/person-card.interface';


export class SelectCourse implements Action {
  readonly type = AT.SELECT_COURSE;
  constructor(public payload: any) {
  }
}


export class SetStaff implements Action {
  readonly type = AT.SET_STAFF;
  constructor(public payload: {id: string, staff: PersonCard[]}) {
  }
}

export class Authorize implements Action {
  readonly type = AT.AUTHORIZED;
  constructor(public payload: boolean) {
  }
}

export class SetToken implements Action {
  readonly type = AT.SET_TOKEN;
  constructor(public payload: string) {
  }
}

export class AddToCart implements Action {
  readonly type = AT.ADD_TO_CART;
  constructor(public payload: any) {
  }
}

export class RemoveFromCart implements Action {
  readonly type = AT.REMOVE_FROM_CART;
  constructor(public payload: any) {
  }
}

export class SelectArticle implements Action {
  readonly type = AT.SELECT_ARTICLE;
  constructor(public payload: any) {
  }
}

export class SetArticles implements Action {
  readonly type = AT.SET_ARTICLES;
  constructor(public payload: any[]) {
  }
}

export class SelectEvent implements Action {
  readonly type = AT.SELECT_EVENT;
  constructor(public payload: number) {
  }
}

export class SetCourses implements Action {
  readonly type = AT.SET_COURSES;
  payload: any;
}

export class SetStats implements Action {
  readonly type = AT.SET_SCHOOL_STATS;
  payload: StatBanner[];
}

export class SetTestimonials implements Action {
  readonly type = AT.SET_TESTIMONIALS;
  payload: any[];
}

export type ShopActions = AddToCart | RemoveFromCart;

export type ArticlesActions = SetArticles | SelectArticle;

export type CourseActions = SelectCourse | SetCourses | SetStaff;

export type StatActions = SetStats;

export type EventActions = SelectEvent;

export type TestimonialActions = SetTestimonials;

export type UserActions = Authorize | SetToken;

