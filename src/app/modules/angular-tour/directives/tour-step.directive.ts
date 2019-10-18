import { Directive, Input, Inject, PLATFORM_ID, AfterViewInit, OnDestroy, ElementRef} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Subscription, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {StepTargetService} from '../services/step-target.service';
import {TourService} from '../services/tour.service';
import { strict } from 'assert';

@Directive({
  selector: 'appTourStep, [appTourStep]'
})
export class TourStepDirective implements AfterViewInit, OnDestroy {
  @Input('appTourStep') name: string;
  private readonly onDestroy = new Subject<any>();
  subscription: Subscription;
  isBrowser: boolean;
  timeout: any;
  constructor(
    private elemRef: ElementRef,
    private readonly tour: TourService,
    private readonly stepTarget: StepTargetService,
    @Inject(PLATFORM_ID) platformId: {}) {
      this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) {
      return;
    }
    const StepOb = this.tour.getCurrent().pipe(
      takeUntil(this.onDestroy),
      map((stepName: string) => {
          if (!stepName || this.name !== stepName) {
            return stepName;
          } else {
            const target = this.elemRef.nativeElement;
            if (this.tour.isRouteChanged()) {
              const delay = this.tour.getStepByName(stepName).options.animationDelay;
              this.timeout = setTimeout(
                () => this.stepTarget.setTargetSubject({target, stepName}), delay);
            } else {
              this.timeout = setTimeout(() => this.stepTarget.setTargetSubject({target, stepName}), 0);
            }
            return stepName;
          }
        }
      )).subscribe();
  }
  ngOnDestroy() {
    this.onDestroy.next();
    clearTimeout(this.timeout);
   // this.subscription.unsubscribe();
  }
}
