import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

import {CourseType} from '../../../interfaces/course.interface';

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeaturedCoursesComponent implements OnInit {
  courses: Observable<CourseType[]>;
  constructor(
    private store: Store<{courses: CourseType[]}>,
    private router: Router
  ) { }

  ngOnInit() {
    this.courses = this.store.select('courses').pipe(
      map((items: CourseType[]) => items.filter(item => item.featured)
        .map(item => ({
          ...item, path: `/courses/${item.id}`
        }))
      )
    )
    // console.log(this.courses)
  }
  onClick() {
    // this.router.navigate(['/courses']);
  }
}
