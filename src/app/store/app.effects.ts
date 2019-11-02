import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, withLatestFrom, catchError } from 'rxjs/operators';

import {CourseType} from '../interfaces/course.interface';
import { StaffService } from '../services/staff.service';
import {SetStaff} from './actions';

@Injectable()
export class PhotoEffect {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('@ngrx/router-store/request'),
      map((y: any) => {
        if (/(courses)\/\w+$/.test(y.payload.event.url)) {
          return y.payload.event.url.split('/').slice(-1)[0];
        }
        return null;
      }),
      withLatestFrom(this.store.select('courses'), (x, y) => y.filter(c => c.id === x)[0]),
      map(c => {
        if (c && c.image) {
          this.photoService.getPersons(c.staff.length).pipe(
            catchError(error => EMPTY),
            map(images => {
              const staff = c.staff.map((st, i) => {
                return ({...st, ...images[i]});
              });
              this.store.dispatch(new SetStaff({id: c.id, staff}));
            })
          ).subscribe();
        }
      }),
      catchError(error => EMPTY)
    ), {dispatch: false});
  constructor(
    private actions$: Actions,
    private photoService: StaffService,
    private store: Store<{courses: CourseType[]}>
  ) {}
}
