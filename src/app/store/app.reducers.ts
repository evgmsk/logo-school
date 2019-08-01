
import * as AT from './ActionTypes';
import * as actions from './actions';
import {InitialState} from './initialState';

export function statReducers(state = InitialState, action: actions.SetStats) {
  switch (action.type) {
    case(AT.SET_SCHOOL_STATS):
      return {
        ...state, schoolStats: action.payload
      };
    default:
      return state;
  }
}

export function courseReducers(state = InitialState, action: actions.SetFeaturedCourses) {
  switch (action.type) {
    case(AT.SET_FEATURED_COURSES):
      return {
        ...state, featuredCourses: action.payload
      };
    default:
      return state;
  }
}
