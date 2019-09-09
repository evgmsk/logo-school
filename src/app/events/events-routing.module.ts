import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {EventComponent} from './event/event.component';
import {EventsComponent} from './events.component';

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: ':id', component: EventComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EventsRoutingModule { }
