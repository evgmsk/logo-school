import { Component, OnInit, HostBinding, HostListener, Input, AfterViewInit, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {TourService2, TourStepInterface, TourStepHandlersInterface} from '../../common/ng-tour.service2';

export enum StepPosition {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
}

@Component({
  selector: 'app-ng-tour-step',
  templateUrl: './ng-tour-step.component.html',
  styleUrls: ['./ng-tour-step.component.scss']
})
export class TourStepComponent implements OnInit, TourStepHandlersInterface {
  @Input() className?: string = '';
  @Input() backdrop?: boolean = true;
  @Input() backdropColor?: string ='rgba(70, 110, 140, .5)';
  @Input() customContent?: boolean = false;
  @Input('position') stepPosition?: StepPosition = StepPosition.down;
  @HostBinding('class') class: string;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.targetRect && this.target) {
      this.setTarget(this.target)
      console.log('resize')
    } 
  }
  step$: Observable<TourStepInterface>; 
  target: Element = null;
  targetRect: ClientRect | DOMRect = null;
  targetPosition: {top: number, left: number};
  currentStep: TourStepInterface = null;
  total?: number;
  first?: boolean;
  last?: boolean;
  isBrowser: boolean;
  docRect: DOMRect | ClientRect;
  tourService: any;
  constructor(private readonly t2: TourService2, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.tourService = this.t2;
    console.log('component', this.tourService.id, this.t2.id)
  }

  ngOnInit() {
    if (!this.isBrowser) {
      return
    }
    this.class = this.className;
    this.step$ = this.tourService.getCurrentStep().pipe(
      map(stepName => {
        console.log(stepName)
        const target = document.querySelector(`[data-tour-step-name=${stepName}]`)
        console.log('current', target, stepName, this.tourService.getFullHistory())
        if (target)  {
            this.setTarget(target);
            this.currentStep = this.tourService.getStepByName(stepName);
            this.last = this.tourService.isLast(stepName);
            this.first = this.tourService.isFirst(stepName);
            this.total = this.tourService.getTotal();
        } else {
          return stepName;
        }
        return this.currentStep;
      })
    )
  }

  setTarget(target: Element) {
    this.target = target
    this.targetRect = target.getBoundingClientRect();
    this.targetPosition = this.tourService.getPosition(target);
    this.docRect = document.documentElement.getBoundingClientRect();
    console.log('pos', this.targetRect.width, this.targetPosition.top, this.docRect.height)
    this.drawStep();
  }

  drawStep() {
    document.documentElement.scroll({top: this.targetPosition.top - 50, left: this.targetPosition.left, behavior: 'smooth'});
  }
  handleClose() {
    console.log('close')
    this.tourService.stopTour();
  }
  handleNext() {
    if (!this.last) {
      this.tourService.initNewStep(this.currentStep.index + 1);
    }
  }
  handlePrev() {
    if (!this.first) {
      this.tourService.initNewStep(this.currentStep.index - 1);
    }
  }
}
