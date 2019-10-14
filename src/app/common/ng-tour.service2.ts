import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
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
  handlePrev(): void;
  handleNext(): void;
  handleClose(): void;
}

export interface StepTargetInterface {
  stepName: string;
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
export class TourService2 {
  private steps: TourStepInterface[];
  private initStep$ = new BehaviorSubject<string>(null);
  private currentStep$ = new BehaviorSubject<TourStepInterface>(null);
  private tourStarted = false;
  private history: number[] = [];
  private routeChanged = false;
  public id: string;
  constructor(private router: Router) {
    this.id = Math.random().toString(36).slice(2, 10);
   }

  private setSteps(steps: TourStepInterface[]) {
    this.steps = steps.map((x, i) => {
      x.index = i;
      return x;
    });
  }
  
  public initNewStep(stepNum: number) {
    const previousStep = this.getHistoryLength() ? this.steps[this.getLastStep()] : {route: null};
    const currentStep = this.steps[stepNum];
    this.routeChanged = previousStep.route !== currentStep.route;
    this.history.push(stepNum);
    console.log('init next', stepNum, this.history, previousStep, currentStep);
    if (this.routeChanged) {
      this.router.navigate([currentStep.route]);
    }
    this.initStep$.next(currentStep.stepName);
  }
  public setCurrentStep(stepName: string) {
    console.log('set current', stepName);
    this.currentStep$.next(this.getStepByName(stepName));
  }
  public getCurrentStep(): Observable<string> {
    return this.initStep$;
  }

  public isRouteChanged() {
    return this.routeChanged;
  }

  public getPosition(el: Element) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  public getHistoryLength() {
    return this.history.length;
  }
  public getFullHistory() {
    return this.history;
  }
  public getLastStep() {
    return this.history.slice(-1)[0];
  }
  public getStepByNumber(number: number): TourStepInterface {
    return this.steps[this.history[number]];
  }
  public getStepByName(stepName: string): TourStepInterface {
    return this.steps.filter(step => step.stepName === stepName)[0];
  }
  public isLast(stepName: string): boolean{
    return this.steps.slice(- 1)[0].stepName === stepName;
  }
  public isFirst(stepName: string): boolean{
    return this.steps.slice(0, 1)[0].stepName === stepName;
  }
  public getTotal(): number {
    return this.steps.length;
  }
  private setTourStatus(status: boolean): void {
    this.tourStarted = status;
  }
  public getTourStatus() {
    return this.tourStarted;
  }
  public startTour(steps: TourStepInterface[]) {
    console.log('init tour with steps:', steps)
    this.setTourStatus(true);
    this.setSteps(steps);
    this.initNewStep(0);
  }
  
  public stopTour() {
    
    this.setTourStatus(false);
    this.initStep$.next(null);
    // this.initStep$.complete();
    this.history.length = 0;
    console.log('stop', this.history)
  }
}

