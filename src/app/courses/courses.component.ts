import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


import {CourseType} from '../interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CoursesComponent implements OnInit {
  id: number;
  courses: Observable<CourseType[]>;
  constructor(private store: Store<{courses: CourseType[]}>,
              private router: Router) { }

  ngOnInit() {
    this.courses = this.store.select('courses').pipe(
      map((courses => courses.map((c, i) => {
        c.path = `/courses/${c.id}`;
        return c;
      })))
    );
  }
}
