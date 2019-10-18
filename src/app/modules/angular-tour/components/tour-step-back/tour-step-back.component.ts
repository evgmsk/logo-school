import { Component, AfterViewChecked, Input } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

// import {StepTargetService} from '../../../../layouts/angular-tour/step-target.service';

@Component({
  selector: 'app-tour-step-back',
  templateUrl: './tour-step-back.component.html',
  styleUrls: ['./tour-step-back.component.scss'],
  animations: [
    trigger('backdropState', [
      transition('void => on', animate('200ms', keyframes([
        style({
          opacity: 0,
          offset: 0
        }),
        style({
          opacity: .3,
          offset: 0.5
        }),
        style({
          opacity: 1,
          offset: 1
        }),
      ]))),
      // transition('* => void', animate(1200, keyframes([
      //   style({
      //         opacity: 1,
      //         offset: 0
      //       }),
      //       style({
      //         opacity: .7,
      //         offset: 0.5
      //       }),
      //       style({
      //         opacity: 0,
      //         offset: 1
      //       }),
      // ])))
  ])]
})
export class TourStepBackComponent {
  @Input() backgroundColor: string;
  @Input() stepBackSize: Object;
  @Input() state: string;

  constructor() { }
}
