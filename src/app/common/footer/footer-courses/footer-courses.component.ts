import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';

import {CourseType} from '../../../interfaces/course.interface';

@Component({
  selector: 'app-footer-courses',
  templateUrl: './footer-courses.component.html',
  styleUrls: ['./footer-courses.component.scss'],
})
export class FooterCoursesComponent implements OnInit {
  courses: Observable<{name: string}[]>;
  constructor(private store: Store<{courses: CourseType[]}>,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.courses = this.store.select('courses').pipe(
      map((c: CourseType[]) => {
        return c.map((item, i) => ({name: item.name, path: `/courses/${item.id}`}));
      })
    );
    // console.log(this.courses)
  }
}
