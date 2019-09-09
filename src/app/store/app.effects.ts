import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { Observable, EMPTY, interval } from 'rxjs';

import {CourseType} from '../interfaces/course.interface';
import { map, mergeMap, catchError, zip, take } from 'rxjs/operators';
import { PhotoService } from '../services/photo.service';
import * as AT from './ActionTypes';
import {SetStaff} from './actions';

@Injectable()
export class PhotoEffect {
  course: Observable<CourseType>;
  param: string;
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('*')
    ));
  constructor(
    private actions$: Actions,
    private photoService: PhotoService,
    private store: Store<{courses: CourseType[]}>
  ) {
    this.actions$.subscribe((x: {[propName: string]: any, type: string, payload: any}) => {
      if (x.type ==='@ngrx/router-store/request' && /(courses)\/\w+$/.test(x.payload.event.url)) {
        this.param = x.payload.event.url.split('/').slice(-1)[0];
        this.course = this.store.select('courses').pipe(
          take(1),
          map(x => x.filter(c => c.id === this.param)[0]),
          map(x => {
            this.photoService.getAll(x.staff.length).subscribe(y => {
              const staff = y.map((z, i) => {
                const {name, image} = z;
                return {...x['staff'][i], name, image}
              });
              console.log(staff);
              this.store.dispatch(new SetStaff({id: this.param, staff}))
            });
            return x
          }
        ));
        this.course.subscribe()
      }
    })
  }
}
