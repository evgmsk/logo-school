import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CoursesComponent} from './courses.component';
import {CourseComponent} from './course/course.component';

const routes: Routes = [
   {
    path: ':id',
    component: CourseComponent
  },
  {
    path: '',
    component: CoursesComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CoursesRoutingModule { }
