import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {SharedModule} from '../shared/shared.module';
import {CoursesRoutingModule} from './courses-routing.module';

// const routes: Routes = [];


@NgModule({
  declarations: [CoursesComponent, CourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    RouterModule,
  ],
  exports: [CoursesComponent, CourseComponent]
})
export class CoursesModule { }
