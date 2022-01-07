import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ng3TourModule} from 'ng3-tour';

// import {AngularTourModule} from '../angular-tour/ng-tour.module';

import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {SharedModule} from '../../shared/shared.module';
import {CoursesRoutingModule} from './courses-routing.module';

@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    Ng3TourModule.forChild(),
  ],
  exports: [CoursesComponent, CourseComponent]
})
export class CoursesModule { }
