import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCartComponent } from './course-cart/course-cart.component';
import {CoursesComponent} from './courses.component';



@NgModule({
  declarations: [CourseCartComponent, CoursesComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseCartComponent, CoursesComponent]
})
export class CoursesModule { }
