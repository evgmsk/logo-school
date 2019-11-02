import { Component, OnInit, OnDestroy } from '@angular/core';

import {TourService, TourStepI, StepOptionsI, TourEventsI} from '../../angular-tour/services/tour.service';

const steps: TourStepI[] = [
  {
    stepName: 'first',
    route: 'home',
    title: 'Your tour started',
    description: 'Almost default settings. Only "top" placement is setted.',
    options: {}
  },
  {stepName: 'second', route: 'courses', options: {animatedStep: false, smoothScroll: true}},
  {
    stepName: 'third',
    route: 'courses/WAUQDI',
    options: { placement: 'down', stepTargetResize: [5] }},
  {stepName: 'fourth', route: 'home'},
  {stepName: 'fifth', route: 'home', options: { placement: 'center', smoothScroll: true, stepTargetResize: [5] }},
];
const tourOptions: StepOptionsI = {
  placement: 'top',
  // customTemplate: false,
};
const tourEvents: TourEventsI = {
  // tourStart: ({tour}) => console.log(tour),
  // next: ({step}) => console.log(step),
  // prev: ({step}) => console.log(step),
  // tourBreak: ({step}) => console.log(step),
   tourEnd: ({step}) => console.log(step),
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
      this.tour.startTour({steps, tourOptions, tourEvents});
    }
  }
}
