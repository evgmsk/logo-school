import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { ShortDescriptionPipe } from '../pipes/short-description.pipe';
import { MediaCardComponent } from './media-card/media-card.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    MediaCardComponent,
    ShortDescriptionPipe,
    PersonCardComponent,
    DropdownDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CarouselComponent,
    MediaCardComponent,
    RouterModule,
    PersonCardComponent,
    DropdownDirective,
  ]
})
export class SharedModule { }
