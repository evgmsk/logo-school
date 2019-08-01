import {Action} from '@ngrx/store';

import * as AT from './ActionTypes';
import {StatBanner} from '../interfaces/stat-banner.interface';

export class SelectCourse implements Action {
  readonly type = AT.SELECT_COURSE;
  payload: any;
}

export class SetFeaturedCourses implements Action {
  readonly type = AT.SET_FEATURED_COURSES;
  payload: any;
}

export class SetStats implements Action {
  readonly type = AT.SET_SCHOOL_STATS;
  payload: StatBanner[];
}

export type CourseActions = SelectCourse;

export type StatActions = SetStats;
