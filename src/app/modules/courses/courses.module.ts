import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AngularTourModule} from '../angular-tour/angular-tour.module';

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
    AngularTourModule.forChild(),
  ],
  exports: [CoursesComponent, CourseComponent]
})
export class CoursesModule { }
