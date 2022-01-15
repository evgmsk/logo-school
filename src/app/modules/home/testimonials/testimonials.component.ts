import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Testimonial} from '../../../interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {
  testimonials: Observable<Testimonial[]>;
  constructor(private store: Store<{testimonials: Testimonial[]}>) { }

  ngOnInit() {
    this.testimonials = this.store.select('testimonials');
    // console.log(this.testimonials)
  }
}
