import { Component, OnInit, Input } from '@angular/core';

import {Testimonial} from '../../../interfaces/testimonial.interface';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  @Input() carouselItems: Testimonial[];
  className: string;
  constructor() { }

  ngOnInit() {
  }
}
