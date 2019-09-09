import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagesComponent} from './pages/pages.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'events', loadChildren: () => import('./events/events.module').then(mod => mod.EventsModule)},
  {path: 'courses', loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule)},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
