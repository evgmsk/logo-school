import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [EventsComponent, EventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ],
  exports: [EventsComponent, EventComponent]
})
export class EventsModule { }
