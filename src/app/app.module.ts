import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import {CoursesModule} from './courses/courses.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventsComponent } from './events/events.component';
import { PagesComponent } from './pages/pages.component';
// import { CoursesComponent } from './courses/courses.component';
import { NavMenuComponent } from './header/nav-menu/nav-menu.component';
import { SubMenuComponent } from './header/nav-menu/sub-menu/sub-menu.component';
import { ShopComponent } from './header/shop/shop.component';
import { SearchComponent } from './header/search/search.component';
import { FooterContactsComponent } from './footer/footer-contacts/footer-contacts.component';
import { FooterCoursesComponent } from './footer/footer-courses/footer-courses.component';
import { FooterInstagramComponent } from './footer/footer-instagram/footer-instagram.component';
import { FooterNewsLettersComponent } from './footer/footer-news-letters/footer-news-letters.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { AboutComponent } from './home/about/about.component';
import { AboutStatisticBannerComponent } from './home/about-statistic/about-statistic-banner/about-statistic-banner.component';
import { AboutStatisticComponent } from './home/about-statistic/about-statistic.component';
import { FeaturedCoursesComponent } from './home/featured-courses/featured-courses.component';
import {statReducers, courseReducers} from './store/app.reducers';
import { VideoSectionComponent } from './home/video-section/video-section.component';
import { EventsSectionComponent } from './home/events-section/events-section.component';
import { EventCartComponent } from './events/event-cart/event-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    EventsComponent,
    PagesComponent,
    // CoursesComponent,
    NavMenuComponent,
    SubMenuComponent,
    ShopComponent,
    SearchComponent,
    FooterContactsComponent,
    FooterCoursesComponent,
    FooterInstagramComponent,
    FooterNewsLettersComponent,
    FooterBottomComponent,
    AboutComponent,
    AboutStatisticBannerComponent,
    AboutStatisticComponent,
    FeaturedCoursesComponent,
    VideoSectionComponent,
    EventsSectionComponent,
    EventCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    StoreModule.forRoot({statReducers, courseReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
