import { Component,
  OnInit,
  HostBinding,
  HostListener,
  Inject,
  PLATFORM_ID,
  OnDestroy
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import {isPlatformBrowser} from '@angular/common';
import {Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {
  TourService,
  TourStepInterface,
  TourStepHandlersInterface,
} from '../services/tour.service';
import {StepSizeInterface, StepTargetService} from '../services/step-target.service';


@Component({
  selector: 'app-tour-step',
  templateUrl: './tour-step.component.html',
  styleUrls: ['./tour-step.component.scss'],
  animations: [
    trigger('stepState', [
      transition('void => *', animate('200ms', keyframes([
        style({
          opacity: 0,
          transform: 'translateY(50px)',
          offset: 0
        }),
        style({
          opacity: .3,
          transform: 'translateY(35px)',
          offset: 0.5
        }),
        style({
          opacity: 1,
          transform: 'translateY(0)',
          offset: 1
        }),
      ]))),
      transition('off => on', animate('200ms', keyframes([
        style({
          opacity: 0,
          transform: 'translateY(50px)',
          offset: 0
        }),
        style({
          opacity: .3,
          transform: 'translateY(35px)',
          offset: 0.5
        }),
        style({
          opacity: 1,
          transform: 'translateY(0)',
          offset: 1
        }),
      ]))),
      transition('on => off', animate('200ms', keyframes([
        style({
          opacity: 1,
          transform: 'translateY(0)',
          offset: 0
        }),
        style({
          opacity: .3,
          transform: 'translateY(25px)',
          offset: 0.5
        }),
        style({
          opacity: 0,
          transform: 'translateY(50px)',
          offset: 1
        }),
      ])))
    ]),
  ]
})

export class TourStepComponent implements OnInit, OnDestroy, TourStepHandlersInterface {
  @HostBinding('class') class: string;
  targetElement: Element;
  target: StepSizeInterface;
  currentStep: TourStepInterface = null;
  step$: Observable<TourStepInterface> = null;
  stepNumber: number;
  total?: number;
  first?: boolean;
  last?: boolean;
  isBrowser: boolean;
  stepState = 'on';
  onDestroy = new Subject<any>();
  timeout: any;
  constructor(
    private readonly tourService: TourService,
    private readonly stepTargetService: StepTargetService,
    @Inject(PLATFORM_ID) platformId: {}) {
      this.isBrowser = isPlatformBrowser(platformId);
  }
  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    if (this.target && this.currentStep) {
      this.saveTarget(this.targetElement);
    }
  }
  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    this.tourService.getCurrent().pipe(
      takeUntil(this.onDestroy),
      map(step => {
        this.currentStep = null;
        if (this.tourService.isRouteChanged()) {
          const delay = this.tourService.getStepByName(step).options.animationDelay;
          this.timeout = setTimeout(() => this.checkTarget(step), delay + 100);
        } else {
          this.timeout = setTimeout(() => this.checkTarget(step), 100);
        }
        return step;
      })
    ).subscribe();
    this.step$ = this.stepTargetService.getTargetSubject().pipe(
      map( step => {
        console.log(step);
        if (step && this.tourService.getTourStatus) {
          this.targetElement = step.target;
          this.currentStep = this.tourService.getStepByName(step.stepName);
          this.saveStepData(this.currentStep);
          this.saveTarget(step.target);
          return this.currentStep;
        }
        return step;
      }),
    );
  }
  ngOnDestroy() {
    this.onDestroy.next();
    clearTimeout(this.timeout);
  }

  checkTarget(step: string, times = 2) {
    if (!this.tourService.getTourStatus()) {
      return;
    }
    const target = document.querySelector(`[apptourstep=${step}]`);
    if (times && this.tourService.isRouteChanged() && !target) {
      setTimeout(() => this.checkTarget(step, times - 1), 200);
    } else if (!target) {
      console.warn(`Target is missed for step ${step}`);
      if (this.tourService.getStepByName(step).options.continueIfTargetAbsent) {
        const index = this.tourService.getStepByName(step).index + 1;
        if (index < this.total) {
            this.tourService.initStep(index);
        } else {
          console.warn(`The tour is stopped because of the target for ${step} is missed  `);
          this.tourService.stopTour();
        }
      }
    }
  }

  saveTarget(target: Element): void {
    this.target = this.stepTargetService.addPaddingToTarget(
      this.stepTargetService.getSizeAndPosition(target), this.currentStep.options.stepTargetPadding);
    this.drawStep();
  }
  saveStepData(step: TourStepInterface): void {
    const {options: {arrowToTarget, stepPosition, className}} = step;
    const posClass = arrowToTarget ? `with-arrow-${stepPosition}` : stepPosition;
    this.class = className ? `${className} ${posClass}` : posClass;
    this.stepNumber = step.index + 1;
    this.total = this.tourService.getTotal();
    this.first = step.index === 0;
    this.last = step.index === this.total - 1;
  }
  drawStep() {
    this.stepState = 'on';
    const left = this.target.left;
    const top = this.target.top - 100;
    document.documentElement.scroll({top, left, behavior: 'smooth'});
  }
  handleClose() {
    this.stepState = 'off';
    this.tourService.stopTour();
    this.stepTargetService.setTargetSubject(null);
  }
  handleNext() {
    if (!this.last) {
      this.stepState = 'off';
      this.tourService.initStep(this.currentStep.index + 1);
    }
  }
  handlePrev() {
    if (!this.first) {
      this.stepState = 'off';
      this.tourService.initStep(this.currentStep.index - 1);
    }
  }
}
