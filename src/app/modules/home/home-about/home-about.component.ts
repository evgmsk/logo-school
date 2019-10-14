import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {TourService2, TourStepInterface} from '../../../common/ng-tour.service2';

const steps: TourStepInterface[] = [
  {stepName: 'first', route: 'home'},
  {stepName: 'second', route: 'courses'},
  {stepName: 'third', route: 'courses/WAUQDI'},
  {stepName: 'fourth', route: 'home'},
  {stepName: 'fifth', route: 'home'},
]

@Component({
  selector: 'app-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private tour: TourService2) { 
    console.log(this.tour.id)
  }

  ngOnInit() {
    // if (!this.tour.getTourStatus())
    // this.tour.startTour(steps);
  }
  ngOnDestroy() {
    
  }
  onStartTour() {
    if (!this.tour.getTourStatus())
      this.tour.startTour(steps);
  }
}
