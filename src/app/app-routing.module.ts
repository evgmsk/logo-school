import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EventsComponent} from './events/events.component';
import {PagesComponent} from './pages/pages.component';
import {CoursesComponent} from './courses/courses.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
