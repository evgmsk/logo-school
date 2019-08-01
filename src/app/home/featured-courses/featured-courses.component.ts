import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {CourseCart} from '../../interfaces/course-cart.interface';

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.scss']
})
export class FeaturedCoursesComponent implements OnInit {
  carts: Observable<{featuredCourses: CourseCart[]}>;
  constructor(private store: Store<{courseReducers: {featuredCourses: CourseCart[]}}>) { }

  ngOnInit() {
    this.carts = this.store.select('courseReducers');
  }
  // redirectToCourses() {
  //
  // }
}
