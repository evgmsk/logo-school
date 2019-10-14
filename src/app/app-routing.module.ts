import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagesComponent} from './modules/pages/pages.component';
import {ContactsComponent} from './modules/contacts/contacts.component';
import {HomeComponent} from './modules/home/home.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'pages', component: PagesComponent, data: {animation: 'PagesPage'}},
  {path: 'events', loadChildren: () => import('./modules/events/events.module').then(mod => mod.EventsModule)},
  {path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(mod => mod.CoursesModule)},
  {path: 'contacts', component: ContactsComponent, data: {animation: 'ContactPage'}},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 