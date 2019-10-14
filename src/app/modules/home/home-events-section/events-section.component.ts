import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import {EventType} from '../../../interfaces/event.interface';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsSectionComponent implements OnInit {
  events: Observable<EventType[]>;
  icons: {};
  show: boolean[];
  @ViewChild('b', {static: false}) b: ElementRef;
  constructor(private store: Store<{events: EventType[]}>) { }

  ngOnInit() {
    this.events = this.store.select('events').pipe(
      map(ev => ev.map((e, i) => {
        e.path = `/events/${i}`;
        return e;
      })
    ));
    this.events.subscribe(evs => {
      this.show = new Array(evs.length).fill(false);
    });
    this.icons = {mail: 'fa fa-envelop-o', phone: 'fa fa-phone', facebook: 'fa fa-facebook'};
  }
  onShowDetails(i): void {
    this.show[i] = !this.show[i];
    this.b.nativeElement.focus();
  }
}
