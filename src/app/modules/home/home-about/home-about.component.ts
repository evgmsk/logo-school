import { Component, OnInit, OnDestroy } from '@angular/core';

import {TourService, TourStepI, StepOptionsI} from '../../angular-tour/services/tour.service';

const steps: TourStepI[] = [
  {stepName: 'first', route: 'home', options: {}},
  {stepName: 'second', route: 'courses', options: {animatedStep: false, smoothScroll: true}},
  {
    stepName: 'third',
    route: 'courses/WAUQDI',
    options: { placement: 'down', stepTargetResize: [5] }},
  {stepName: 'fourth', route: 'home'},
  {stepName: 'fifth', route: 'home', options: { placement: 'center', smoothScroll: true, stepTargetResize: [5] }},
];
const tourOptions: StepOptionsI = {
  smoothScroll: false,
  animatedStep: true,
  placement: 'top',
  customTemplate: false
};

@Component({
  selector: 'app-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit, OnDestroy {
  constructor(private tour: TourService) {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  onStartTour() {
    if (!this.tour.getTourStatus()) {
      this.tour.startTour({steps, tourOptions});
    }
  }
}
