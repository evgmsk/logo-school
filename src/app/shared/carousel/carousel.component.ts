import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';

import {Testimonial} from '../../interfaces/testimonial.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @Input() carouselData: Testimonial[];
  carousel: Testimonial[] = [];
  carouselState = {
    forward: true,
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

  ngAfterViewInit(): void {
    const length = this.carouselData.length;
    this.carousel = this.carouselData.map((item, i) => ({
       ...item, currentIndex: i, className: `carousel-item item${i}`
    }));
    this.carouselState.timeout = setTimeout(this.runCarousel);
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
    this.carousel.forEach(item => {
      const length = this.carousel.length;
      if (this.carouselState.forward) {
        item.currentIndex = (item.currentIndex - 1 + length) % length;
      } else {
        item.currentIndex =  (item.currentIndex + 1) % length;
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
    this.carouselState.forward = true;
    this.setIndex();
  }
  stepBack() {
    this.carouselState.auto_play = false;
    if (this.carouselState.interval) {
      clearInterval(this.carouselState.interval);
    }
    this.carouselState.forward = false;
    this.setIndex();
  }
  onPlay() {
    this.runCarousel();
  }
  onStop() {
    clearInterval(this.carouselState.interval);
  }
  changeCurrent(currentIndex: number) {
    clearInterval(this.carouselState.interval);
    const halfLength = Math.floor(this.carousel.length / 2)
    if (!currentIndex) return
    const min = Math.min(currentIndex, halfLength)
    if (currentIndex > halfLength) {
      this.carouselState.forward = false
    } else {
      this.carouselState.forward = true
    }
    for (let i= 0; i < min; i++) {
      this.setIndex()
    }
  }
}
