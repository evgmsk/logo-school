import { Component, isDevMode } from '@angular/core';

import {TourService, TourStepI, StepOptionsI, TourEventsI} from 'ng3-tour';
// import {TourService, TourStepI, StepOptionsI, TourEventsI} from '../../angular-tour/services/tour.service';

const steps: TourStepI[] = [
  {
    stepName: 'first',
    route: 'home',
    title: 'Your tour started',
    description: 'Almost default settings. Only "top" placement is setted.',
    options: {withoutCounter: true, backdrop: false}
  },
  {
    stepName: 'second',
    route: 'courses',
    title: 'Courses Page',
    description: 'Lazily loaded',
    adds: 'Some adds',
    options: {customTemplate: true, smoothScroll: true, themeColor: '#254689', opacity: .9}
  },
  {
    stepName: 'third',
    route: 'courses/WAUQDI',
    title: {
      'en-EN': 'My first feature',
      'ru-RU': 'Моя первая фича',
      'fr-FR': 'Mon premier long métrage',
  },
    options: {customTemplate: true, placement: 'down', stepTargetResize: [5] }
  },
  {stepName: 'fourth', route: 'home', customData: 'Custom Data'},
  {stepName: 'fifth', route: 'home', options: { placement: 'center', smoothScroll: true, stepTargetResize: [5], fixed: true }},
];
const tourOptions: StepOptionsI = {
  placement: 'top',
  opacity: 0.7,
  delay: 400,
  // customTemplate: false,
};
const tourEvents: TourEventsI = {
  tourStart: ({tour}) => console.log(tour),
  next: ({step, history}) => console.log(step, history),
  prev: ({step}) => console.log(step),
  tourBreak: ({step}) => console.log(step),
  tourEnd: ({step}) => console.log(step),
};

@Component({
  selector: 'app-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent {
  constructor(private tour: TourService) {
    console.log(isDevMode())
  }
  onStartTour() {
    if (!this.tour.getTourStatus()) {
      this.tour.startTour({steps, tourOptions, tourEvents});
    }
  } 
}
