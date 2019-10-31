import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { Observable, EMPTY } from 'rxjs';

import {CourseType} from '../interfaces/course.interface';
import { map, withLatestFrom, catchError } from 'rxjs/operators';
import { PhotoService } from '../services/photo.service';
import {SetStaff} from './actions';

@Injectable()
export class PhotoEffect {
  // course: Observable<CourseType>;
  // param: string;
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('@ngrx/router-store/request'),
      map((y: any) => {
        if (/(courses)\/\w+$/.test(y.payload.event.url)) {
          return y.payload.event.url.split('/').slice(-1)[0];
        }
        return null;
      }),
      withLatestFrom(this.store.select('courses')),
      map(([x, y]) =>  y.filter(c => c.id === x)[0]),
      map(c => {
        this.photoService.getPersons(c.staff.length).pipe(
          catchError(error => EMPTY)
        ).subscribe(images => {
          const staff = c.staff.map((st, i) => {
            return ({...st, ...images[i]});
          });
          this.store.dispatch(new SetStaff({id: c.id, staff}));
        });
      }),
      catchError(error => EMPTY)
    ), { dispatch: false });
  constructor(
    private actions$: Actions,
    private photoService: PhotoService,
    private store: Store<{courses: CourseType[]}>
  ) {}
}
