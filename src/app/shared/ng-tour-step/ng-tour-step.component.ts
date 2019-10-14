import { Component, OnInit, HostBinding, Input, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {TourService, TourStepInterface, TourStepHandlersInterface} from '../../common/ng-tour.service';

@Component({
  selector: 'app-ng-tour-step',
  templateUrl: './ng-tour-step.component.html',
  styleUrls: ['./ng-tour-step.component.scss']
})
export class TourStepComponent implements OnInit, TourStepHandlersInterface, AfterContentChecked {
  @Input() className?: string = '';
  @Input() attemptNumber?: number = 15;
  @Input() timeout?: number = 100;
  @Input() backdrop?: boolean = true;
  @Input() backdropColor?: string ='rgba(70, 110, 110, .5)';
  @Input() customContent?: boolean = false;
  @HostBinding('class') class: string;
  target: any = null;
  targetRect: {x: number, y: number, width: number, height: number};
  targetPosition: {top: number, left: number};
  targetExist = false;
  currentStep: TourStepInterface = null;
  step$: Observable<TourStepInterface>;
  stepNumber: number;
  defaultAttemptNumber = 15;
  total?: number;
  first?: boolean;
  last?: boolean;
  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.class = this.className;
    if (this.attemptNumber) {
      this.defaultAttemptNumber = this.attemptNumber;
    } else {
      this.attemptNumber = this.defaultAttemptNumber = 15;
    }
    
    this.timeout = this.timeout ? this.timeout : 300;
    // if (!this.tourService.getTourStatus() ) {
    //   return;
    // }
    console.log('step init')
    this.step$ = this.tourService.currentStep$.pipe(
      map((step: TourStepInterface) => {
        console.log(step, this.tourService.isRouteChanged());
        if (!step) {
          console.warn('No step!');
          return step;
        }
        this.saveStepData(step);
        if (this.tourService.isRouteChanged()) {
          this.checkTargetAfterRouting(step.stepName);
        } else {
          this.checkTarget(step.stepName);
        }
        return step;
      })
    );
  }

  ngAfterContentChecked() {
    console.log(this.target, this.currentStep, this.attemptNumber);
  }
  checkTarget(stepName: string) {
    const target = document.querySelector(`[data-tour-step-name = ${stepName}]`);
    if (target) {
      console.log('target exist');
      this.saveTarget(target);
    } else {
      console.warn(`Tour step: ${stepName} target element missing`);
      if (this.currentStep.index < this.tourService.getTotal() - 1) {
        this.tourService.setCurrent(this.currentStep.index + 1); 
      } else {
        this.tourService.stopTour();
      }
    }
  }

  checkTargetAfterRouting(stepName: string) {
    const target = document.querySelector(`[data-tour-step-name = ${stepName}]`);
    if (target) {
      this.saveTarget(target);
    } else {
      if (this.attemptNumber) {
        this.attemptNumber--;
        setTimeout(() => this.checkTargetAfterRouting(stepName), this.timeout);
      } else {
        console.warn(`Tour step: ${stepName} target element missing`);
        if (this.currentStep.index < this.tourService.getTotal() - 1) {
          this.tourService.setCurrent(this.currentStep.index + 1); 
        } else {
          this.tourService.stopTour();
        }
      }
    }
  }
  saveTarget(target: Element): void {
    this.targetExist = !!target;
    this.target = target;
    this.targetRect = this.target.getBoundingClientRect();
    this.targetPosition = this.tourService.getPosition(target);
    this.drawStep();
  }
  saveStepData(step: TourStepInterface): void {
    this.attemptNumber = this.defaultAttemptNumber;
    this.currentStep = step;
    this.stepNumber = step.index + 1;
    this.total = this.tourService.getTotal();
    this.first = step.index === 0;
    this.last = step.index === this.total - 1;
  }
  drawStep() {
    console.log(this.target, this.targetPosition.left, this.targetPosition.top);
    // scrollTo({...this.targetPosition, behavior: 'smooth'});
    // this.target.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
  }
  clickOnClose() {
    this.tourService.stopTour();
  }
  clickOnNext() {
    if (!this.last) {
      this.tourService.setCurrent(this.currentStep.index + 1);
    }
  }
  clickOnPrev() {
    console.log(this.currentStep.index, this.total, 'prev');
    if (!this.first) {
      this.tourService.setCurrent(this.currentStep.index - 1);
    }
  }
}
