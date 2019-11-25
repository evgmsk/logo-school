import {ActionReducerMap} from '@ngrx/store';

import * as AT from './ActionTypes';
import * as actions from './actions';
import {InitialState, StateInterface} from './initialState';

export function statReducers(state = InitialState.schoolStats, action: actions.StatActions) {
  switch (action.type) {
    case(AT.SET_SCHOOL_STATS):
      return {
        ...action.payload
      };
    default:
      return state;
  }
}

export function userReducers(state = InitialState.user, action: actions.UserActions) {
  switch (action.type) {
    case(AT.AUTHORIZED):
      return {
        ...state, authorized: action.payload
      };
    case(AT.SET_TOKEN):
      return {
        ...state, token: action.payload
      };
    default:
      return state;
  }
}

export function shopReducers(state = InitialState.shoppingCart, action: actions.ShopActions) {
  switch (action.type) {
    case(AT.ADD_TO_CART):
      const newItems = [...state.items, ...action.payload];
      return {
        ...state, items: newItems
      };
    case (AT.REMOVE_FROM_CART):
      return {
        ...state, items: state.items.filter((s, i) => i !== +action.payload)
      };
    default:
      return state;
  }
}

export function courseReducers(state = InitialState.courses, action: actions.CourseActions) {
  switch (action.type) {
    case(AT.SELECT_COURSE):
      return [...state.map((c, i) => {
        if (i === action.payload) {
          c.selected = true;
        }
        return c;
      })];
    case(AT.SET_STAFF):
      const course = {...state.filter(x => x.id === action.payload.id)[0]};
      course.staff = action.payload.staff;
      return [
        ...state.filter(x => x.id !== action.payload.id), course
      ];
    case(AT.SET_COURSES):
      return [
        ...action.payload
      ];
    default:
      return state;
  }
}

export function eventReducers(state = InitialState.events, action: actions.EventActions) {
  switch (action.type) {
    case(AT.SELECT_EVENT):
      return [
        ...state.map((e, i) => {
          if (i === action.payload) {
            e.selected = true;
          }
          return e;
      })];
    default:
      return state;
  }
};

export function articleReducers(state = InitialState.articles, action: actions.ArticlesActions) {
  switch (action.type) {
    case(AT.SELECT_ARTICLE):
      return [...state.map((e, i) => {
          if (i === action.payload) {
            e.selected = true;
          }
          return e;
        })];
    case(AT.SET_ARTICLES):
      return {
        ...action.payload
      };
    default:
      return state;
  }
}

export function testimonialReducers(state = InitialState.testimonials, action: actions.TestimonialActions) {
  switch (action.type) {
    case(AT.SET_TESTIMONIALS):
      return {
        ...action.payload
      };
    default:
      return state;
  }
}

export const reducers = {
  schoolStats: statReducers,
  shoppingCart: shopReducers,
  courses: courseReducers,
  events: eventReducers,
  user: userReducers,
  testimonials: testimonialReducers,
  articles: articleReducers,
};

// export const Reducers: ActionReducerMap<StateInterface> = {
//   schoolStats: statReducers,
//   shoppingCart: shopReducers,
//   courses: courseReducers,
//   events: eventReducers,
//   user: userReducers,
//   testimonials: testimonialReducers,
//   articles: articleReducers,
// };
