import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {take, combineLatest} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {CourseType} from '../../../interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseComponent implements OnInit {
  course$: Observable<CourseType>;
    constructor(private route: ActivatedRoute,
                private store: Store<{courses: CourseType[]}>,
               ) {
    }

  ngOnInit() {
    this.course$ = this.route.params.pipe(
      combineLatest(this.store.select('courses'), (x,y) => y.filter(c => {return c.id === x['id'];})[0])
    )
  }
}
