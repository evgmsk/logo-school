import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {
  transition,
  trigger,
  style,
  animate,
  keyframes
} from '@angular/animations';

import {CourseType} from '../../interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('coursesAnimations', [
      transition('void <=> *', animate(300, keyframes([
        style({
         // marginRight: '100px',
          transform: 'translateX(-50px)',
          opacity: 0,
          offset: 0,
        }),
        style({
          // marginRight: '50px',
          transform: 'translateX(-25px)',
          opacity: .5,
          offset: 0.4,
        }),
        style({
          // marginRight: '15px',
         transform: 'translateX(-10px)',
          opacity: .5,
          offset: 0.7,
        }),
        style({
         // marginRight: '0',
           transform: 'translateX(0)',
          opacity: 1,
          offset: 1,
        })
      ])))
    ])
  ]
})
export class CoursesComponent implements OnInit {
  pageState = 'init';
  id: number;
  courses: Observable<CourseType[]>;
  constructor(private store: Store<{courses: CourseType[]}>,
              private router: Router) { }

  ngOnInit() {
    this.courses = this.store.select('courses');
  }
}
