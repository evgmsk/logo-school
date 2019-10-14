import { Directive, AfterViewInit, Input, OnDestroy, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {Subscription} from 'rxjs'

// import {TourServiceWrapper} from '../common/ng-tour-wrapper.service';
import {TourService2} from '../common/ng-tour.service2';


export enum OnFail {
  initNext = "initNext",
  throwError = "throwError",  
}

@Directive({
  selector: 'appTourStep, [appTourStep]'
})
export class TourStepDirective {
  @Input('appTourStep') stepName: string;
  

  // ngAfterViewInit() {
  //   console.log(this.isBrowser, this.tour.getFullHistory(), this.stepName);
  //   if(this.isBrowser) {
  //     this.subscription = this.tour.initStep$.subscribe((stepName: string) => {
  //       if (this.stepName === stepName) {
  //         this.checkTarget(stepName);   
  //       }  
  //     })
  //   } 
  // }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
 
}

