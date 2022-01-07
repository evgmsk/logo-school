import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {AngularTourModule} from 'ng3-tour';

import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeBlogComponent} from './home-blog/home-blog.component';
import {EventsSectionComponent} from './home-events-section/events-section.component';
import {ClientsComponent} from './clients/clients.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {FeaturedCoursesComponent} from './featured-courses/featured-courses.component';
import {AboutStatisticComponent} from './about-statistic/about-statistic.component';
import {AboutStatisticBannerComponent} from './about-statistic/about-statistic-banner/about-statistic-banner.component';
import {HomeAboutComponent} from './home-about/home-about.component';
import {VideoSectionComponent} from './video-section/video-section.component';
import {Ng3TourModule} from 'ng3-tour';

// import {AngularTourModule} from '../angular-tour/ng-tour.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBlogComponent,
    HomeAboutComponent,
    AboutStatisticBannerComponent,
    AboutStatisticComponent,
    FeaturedCoursesComponent,
    TestimonialsComponent,
    EventsSectionComponent,
    ClientsComponent,
    VideoSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Ng3TourModule.forChild(),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
