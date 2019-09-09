import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable,  Subject, concat, from, of, forkJoin, interval} from 'rxjs';
import {map, zip,  switchMap, merge, filter, combineLatest, mergeMap, bufferToggle, mergeAll} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {CourseType} from '../../interfaces/course.interface';
import {PhotoService} from  '../../services/photo.service';
import {tick} from "@angular/core/testing";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseComponent implements OnInit {
  course: Observable<CourseType>;
    constructor(private route: ActivatedRoute,
                private store: Store<{courses: CourseType[]}>,
                private photo: PhotoService) {


    }

  ngOnInit() {
    this.course = this.route.params.pipe(
      combineLatest(this.store.select('courses'), (x,y) => y.filter(c => {return c.id === x['id'];})[0])
    )
  }
}
