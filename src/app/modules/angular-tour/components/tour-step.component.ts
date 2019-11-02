import { Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
  OnDestroy,
  ViewEncapsulation,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {
  TourService,
  TourStepI,
  TourHandlersI,
} from '../services/tour.service';
import {StepSizeI, StepTargetService} from '../services/step-target.service';


@Component({
  selector: 'ng-tour-step-template',
  templateUrl: './tour-step.component.html',
  styleUrls: ['./tour-step.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TourStepComponent implements OnInit, OnDestroy, TourHandlersI {
  class: string;
  targetElement: Element;
  target: StepSizeI;
  currentStep: TourStepI = null;
  step$: Observable<TourStepI> = null;
  isBrowser: boolean;
  onDestroy = new Subject<any>();
  timeouts: any[] = [];
  stepModalPosition: {top?: number, left?: number, right?: number, bottom?: number};
  modalHeight: number;
  targetBackground: string;
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() prev: EventEmitter<any> = new EventEmitter();
  @Output() done: EventEmitter<any> = new EventEmitter();
  @Output() break: EventEmitter<any> = new EventEmitter();

  constructor(
    private readonly tourService: TourService,
    private readonly stepTargetService: StepTargetService,
    private elem: ElementRef,
    @Inject(PLATFORM_ID) platformId: {}) {
      this.isBrowser = isPlatformBrowser(platformId);
  }
  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    if (this.target && this.currentStep) {
      this.saveTarget(this.targetElement);
      this.defineStepPlacement();
    }
  }
  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    this.stepModalPosition = {top: -500, left: -500};
    this.tourService.getStepSubject().pipe(
      takeUntil(this.onDestroy),
      map(step => {
        this.currentStep = null;
        if (!step) {
          return step;
        }
        this.resetClasses();
        const {themeColor, delay} = this.tourService.getStepByName(step).options;
        this.targetBackground = themeColor;
        if (this.tourService.isRouteChanged()) {
          this.timeouts[this.timeouts.length] = setTimeout(() => this.checkTarget(step), delay + 100);
        } else {
          this.timeouts[this.timeouts.length] = setTimeout(() => this.checkTarget(step), 100);
        }
        return step;
      })
    ).subscribe();
    this.step$ = this.stepTargetService.getTargetSubject().pipe(
      map( step => {
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
    this.timeouts.forEach(i => clearTimeout(i));
  }

  checkTarget(step: string, times = 2) {
    if (!this.tourService.getTourStatus()) {
      return;
    }
    const delay = this.tourService.getStepByName(step).options.delay;
    const target = document.querySelector(`[ngtourstep=${step}]`);
    if (times && this.tourService.isRouteChanged() && !target) {
      this.timeouts[this.timeouts.length] = setTimeout(() => this.checkTarget(step, times - 1), delay);
    } else if (!target) {
      console.warn(`Target is missed for step ${step}`);
      if (this.tourService.getStepByName(step).options.continueIfTargetAbsent) {
        const index = this.tourService.getStepByName(step).index + 1;
        if (index < this.tourService.getTotal()) {
            this.tourService.nextStep();
        } else {
          console.warn(`The tour is stopped because of no targets is found  for step ${step} and next ones`);
          this.tourService.stopTour();
          this.stepTargetService.setTargetSubject(null);
        }
      }
    }
  }

  resetClasses(): void {
    const step = this.currentStep;
    const source = (step && step.options) || this.tourService.getFirstStepOptions();
    const {arrowToTarget, animatedStep, placement, className} = source;
    const arrowClass = arrowToTarget ? 'with-arrow' : '';
    const animationClass = animatedStep
      ? (step ? 'animation-on' : 'fade-on')
      : (step ? '' : 'fade-on');
    this.class = `${arrowClass} ${className} pos-${placement} ${animationClass}`.trim();
  }

  saveTarget(target: Element): void {
    this.target = this.stepTargetService.resizeTarget(
    this.stepTargetService.getSizeAndPosition(target), this.currentStep.options.stepTargetResize);
    this.timeouts[this.timeouts.length] = setTimeout(() => this.defineStepPlacement(), 0);
  }
  saveStepData(step: TourStepI): void {
    this.resetClasses();
    this.targetBackground = 'transparent';
  }
  defineStepPlacement() {
    const modal = document.querySelector('.tour-step-modal');
    if (!modal) {
      this.timeouts[this.timeouts.length] = setTimeout(() => this.defineStepPlacement(), 100);
      return;
    }
    const modalRect = modal.getBoundingClientRect();
    this.modalHeight = Math.round(modalRect.height ? modalRect.height : modalRect.bottom - modalRect.top);
    const modalWidth = Math.round(modalRect.width ? modalRect.width : modalRect.right - modalRect.left);
    const {placement, scrollTo} = this.currentStep.options;
    const {top, bottom, width, left, right} = this.target;
    if (/^down$/i.test(placement)) {
      this.stepModalPosition = {top: bottom + 20, left: Math.round(left - modalWidth / 2)};
    } else if (/^top$/i.test(placement)) {
      this.stepModalPosition = {
        top: top  - this.modalHeight - 20,
        left: Math.round(left - modalWidth / 2)
      };
    } else if (/^left$/i.test(placement)) {
      this.stepModalPosition = {left: left - modalWidth - 20, top};
    } else if (/^right$/i.test(placement)) {
      this.stepModalPosition = {left: right + width + 20, top};
    } else if (/^center$/i.test(placement)) {
      this.stepModalPosition = {
        left: Math.round(window.innerWidth / 2 - modalWidth / 2),
        top: Math.round(window.innerHeight / 2 - this.modalHeight / 2)
      };
    }
    if (scrollTo) {
      this.scrollTo();
    }
  }

  scrollTo() {
    const {placement, fixed} = this.currentStep.options;
    const left = this.target.left;
    const top = placement !== 'top' ? this.target.top - 100 : this.target.top - this.modalHeight - 50;
    const behavior = this.currentStep.options.smoothScroll ? 'smooth' : 'auto';
    if (!fixed) {
      document.documentElement.scroll({top, left, behavior});
    } else {
      document.documentElement.scroll({top: 0, left: 0, behavior});
    }
  }
  handleClose() {
    const {index} = this.currentStep;
    if (this.tourService.getLastStepIndex() < this.tourService.getTotal() - 1) {
      this.break.emit(index);
    } else {
      this.done.emit(index);
    }
    this.tourService.stopTour();
  }
  handleNext() {
    const index = this.currentStep.index + 1;
    this.tourService.nextStep();
    this.next.emit(index);
  }
  handlePrev() {
    const index = this.currentStep.index - 1;
    this.tourService.prevStep();
    this.prev.emit(index);
  }
}
