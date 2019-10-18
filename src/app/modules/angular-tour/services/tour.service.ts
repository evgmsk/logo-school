import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

// import {StepTargetService} from './step-target.service';

export interface TourInterface {
  steps: TourStepInterface[];
  tourOptions?: StepOptionsInterface;
}

export interface TourStepInterface {
  stepName: string;
  route?: string;
  index?: number;
  title?: string;
  description?: string;
  options?: StepOptionsInterface;
}

export interface StepOptionsInterface {
  className?: string;
  withoutCounter?: boolean;
  withoutPrev?: boolean;
  customTemplate?: boolean;
  themeColor?: string;
  stepPosition?: StepPosition;
  arrowToTarget?: boolean;
  backdrop?: boolean;
  backdropColor?: string;
  animated?: boolean;
  continueIfTargetAbsent?: boolean; // init next step if target is not found for current one
  stepTargetPadding?: number[]; // change size of a 'window' for step target
  animationDelay?: number; // for the case of the lazy routing
}

export class StepOptions implements StepOptionsInterface {
  className?: string;
  withoutCounter?: boolean;
  withoutPrev?: boolean;
  customTemplate?: boolean;
  themeColor?: string;
  stepPosition: StepPosition;
  arrowToTarget?: boolean;
  backdrop?: boolean;
  backdropColor?: string;
  animated?: boolean;
  continueIfTargetAbsent?: boolean;
  stepTargetPadding?: number[];
  animationDelay?: number;
  constructor(options: StepOptionsInterface) {
    const {
      continueIfTargetAbsent = true,
      withoutCounter = false,
      withoutPrev = false,
      customTemplate = false,
      themeColor = 'rgb(20, 60, 60)',
      stepPosition = StepPosition.down,
      arrowToTarget = true,
      stepTargetPadding = [0],
      animationDelay = 500,
      backdrop = true,
      backdropColor = 'rgba(20, 60, 60, .5)'} = options || {};
    this.stepPosition = stepPosition;
    this.arrowToTarget = arrowToTarget;
    this.themeColor = themeColor;
    this.backdrop = backdrop;
    this.backdropColor = backdropColor;
    this.customTemplate = customTemplate;
    this.withoutCounter = withoutCounter;
    this.withoutPrev = withoutPrev;
    this.continueIfTargetAbsent = continueIfTargetAbsent;
    this.stepTargetPadding = stepTargetPadding;
    this.animationDelay = animationDelay;
  }
}

export enum StepPosition {
  top = 'top',
  down = 'down',
  left = 'left',
  right = 'right'
}

export interface TourStepHandlersInterface {
  handlePrev(): void;
  handleNext(): void;
  handleClose(): void;
}

@Injectable()
export class TourService {
  private steps: TourStepInterface[];
  private tourStarted = false;
  public currentStep$ = new BehaviorSubject<any>(null);
  private history = [];
  private routeChanged = false;
  constructor(private router: Router) { }

  private setSteps(tour: TourInterface) {
    console.log(tour.steps);
    this.steps = tour.steps.map((x, i) => {
      x.index = i;
      const options = new StepOptions(tour.tourOptions || {});
      x.options = x.options ? {...options, ...x.options} : options;
      return x;
    });
  }

  public initStep(step: number) {
    const previousStep = this.getHistory() ? this.steps[this.history.slice(-1)[0]] : {route: null};
    const currentStep = this.steps[step];
    // console.log(step, this.history, previousStep, currentStep);
    this.routeChanged = previousStep.route !== currentStep.route;
    this.history.push(step);
    if (this.routeChanged) {
      this.router.navigate([currentStep.route]);
    }
    this.currentStep$.next(currentStep.stepName);
  }

  public getCurrent(): Observable<string> {
    return this.currentStep$;
  }
  public getStepByName(stepName: string): TourStepInterface {
    return this.steps.filter(step => step.stepName === stepName)[0];
  }
  public isRouteChanged() {
    return this.routeChanged;
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
  public startTour(tour: TourInterface) {
    this.setTourStatus(true);
    this.setSteps(tour);
    this.initStep(0);
  }
  public getHistory() {
    return this.history.length;
  }

  public stopTour() {
    this.setTourStatus(false);
    this.steps.length = 0;
    this.currentStep$.next(null);
    this.history.length = 0;
  }
}
