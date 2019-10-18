import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {TourStepComponent} from './components/tour-step.component';
import {TourStepBackComponent} from './components/tour-step-back/tour-step-back.component';
import {TourStepDirective} from './directives/tour-step.directive';
import {StepTargetService} from './services/step-target.service';
import {TourService} from './services/tour.service';

@NgModule({
  declarations: [
    TourStepBackComponent,
    TourStepComponent,
    TourStepDirective
  ],
  // entryComponents: [TourStepComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    // TourStepBackComponent,
    TourStepComponent,
    TourStepDirective
  ]
})
export class AngularTourModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularTourModule,
      providers: [
          StepTargetService,
          TourService
      ]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
        ngModule: AngularTourModule,
        providers: []
    };
  }
}
