import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {Testimonial} from '../../interfaces/testimonial.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() carouselData: Testimonial[];
  carouselState = {
    direction: 'forward',
    auto_play: true,
    interval: null,
    initialDelay: 3000,
    timing: 6000,
    timeout: null,
  };
  constructor() {
    this.runCarousel = this.runCarousel.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  ngOnInit() {
    const length = this.carouselData.length;
    this.carouselData.forEach((item, i) => {
      item.currentIndex = (i + 1) % length;
      item.className = `carousel-item item${item.currentIndex}`;
    });
    this.carouselState.timeout = setTimeout(this.runCarousel, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.carouselState.interval);
    clearTimeout(this.carouselState.timeout);
  }
  runCarousel() {
    if (this.carouselState.auto_play) {
      this.carouselState.interval = setInterval(this.setIndex, this.carouselState.timing);
    }
  }
  setIndex() {
    this.carouselData.forEach(item => {
      const length = this.carouselData.length;
      if (this.carouselState.direction === 'forward') {
        item.currentIndex = (+item.currentIndex + 1) % length;
      } else {
        item.currentIndex = ((+item.currentIndex - 1) + length) % length;
      }
      item.className = `carousel-item item${item.currentIndex}`;
      return item;
    });
  }
  stepForward() {
    this.carouselState.auto_play = false;
    if (this.carouselState.interval) {
      clearInterval(this.carouselState.interval);
    }
    this.setIndex();
  }
  stepBack() {
    this.carouselState.auto_play = false;
    if (this.carouselState.interval) {
      clearInterval(this.carouselState.interval);
    }
    this.carouselState.direction = 'back';
    this.setIndex();
  }
  onPlay() {
    this.runCarousel();
  }
  onStop() {
    clearInterval(this.carouselState.interval);
  }
  setCurrent(currentIndex, index) {
    clearInterval(this.carouselState.interval);
    let step = 1 - currentIndex;
    if (step < 0) {
      this.carouselState.direction = 'back';
    } else {
      this.carouselState.direction = 'forward';
    }
    step = Math.abs(step);
    for (let i = 0; i < step; i++) {
      this.setIndex();
    }
  }
}
