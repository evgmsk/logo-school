import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {Router} from '@angular/router';

export interface TourStepInterface {
  stepName: string;
  route: string;
  index?: number;
  title?: string;
  description?: string;
  withoutCounter?: boolean;
  withoutPrev?: boolean;
  customTemplate?: boolean; 
}

export interface TourStepHandlersInterface {
  clickOnPrev(): void;
  clickOnNext(): void;
  clickOnClose(): void;
}

// export class TourStepModel implements TourStepInterface {
//   readonly stepName: string;
//   readonly route = '';
//   public index = 0;
//   readonly title?: string;
//   readonly description?: string;
//   readonly withoutCounter = false;
//   readonly withoutPrev = false;
//   readonly cutomTemplate = false;
//   constructor({
//     stepName,
//     route,
//     index,
//     title,
//     description,
//     withoutCounter,
//     withoutPrev,
//     customTemplate,
//     }) {
//     this.stepName = stepName;
//     this.route = route;
//     this.index = index;
//     this.title = title;
//     this.description = description;
//     this.withoutPrev = withoutPrev;
//     this.withoutCounter = withoutCounter;
//     this.cutomTemplate = customTemplate;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private steps: TourStepInterface[];
  public started$ = new BehaviorSubject(false);
  private tourStarted = false;
  public currentStep$ = new BehaviorSubject(null);
  private history = [];
  private routeChanged = false;
  constructor(private router: Router) { }

  setSteps(steps: TourStepInterface[]) {
    // console.log(steps);
    this.steps = steps.map((x, i) => {
      x.index = i;
      return x;
    });
  }

  public setCurrent(step: number) {
    const previousStep = this.getHistoryLength() ? this.steps[this.getLatStep()] : {route: null};
    const currentStep = this.steps[step];
    // console.log(step, this.history, previousStep, currentStep);
    this.routeChanged = previousStep.route !== currentStep.route;
    this.history.push(step);
    if (this.routeChanged) {
      this.router.navigate([currentStep.route]);
    }
    this.currentStep$.next(currentStep);
  }

  public isRouteChanged() {
    return this.routeChanged;
  }

  public getPosition(el: any) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  getHistoryLength() {
    return this.history.length;
  }
  getLatStep() {
    return this.history.slice(-1)[0];
  }
  public getTotal(): number {
    return this.steps.length;
  }
  public setTourStatus(status: boolean): void {
    this.tourStarted = status;
  }
  public getTourStatus() {
    return this.tourStarted;
  }
  public startTour(steps: TourStepInterface[]) {
    this.setTourStatus(true);
    this.setSteps(steps);
    this.setCurrent(0);
    console.log(this);
  }
  
  public preStart() {
    this.started$.next(true);
  }

  public stopTour() {
    // console.log('stop')
    this.started$.next(false);
    this.started$.complete();
    this.setTourStatus(false);
    this.currentStep$.next(null);
    this.currentStep$.complete();
    this.history.length = 0;
  }
}

