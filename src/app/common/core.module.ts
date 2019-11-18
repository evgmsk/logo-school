import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AngularTourModule} from 'ng3-tour';
// import {AngularTourModule} from '../modules/angular-tour/ng-tour.module';

import {FooterComponent} from './footer/footer.component';
import {FooterContactsComponent} from './footer/footer-contacts/footer-contacts.component';
import {FooterCoursesComponent} from './footer/footer-courses/footer-courses.component';
import {FooterInstagramComponent} from './footer/footer-instagram/footer-instagram.component';
import {FooterNewsLettersComponent} from './footer/footer-news-letters/footer-news-letters.component';
import {ShopComponent} from './header/shop/shop.component';
import {NavMenuComponent} from './header/nav-menu/nav-menu.component';
import {SubMenuComponent} from './header/nav-menu/sub-menu/sub-menu.component';
import {SearchComponent} from './header/search/search.component';
import {DeviceMenuComponent} from './header/device-menu/device-menu.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchComponent,
    ShopComponent,
    DeviceMenuComponent,
    NavMenuComponent,
    HeaderComponent,
    SubMenuComponent,
    FooterComponent,
    FooterContactsComponent,
    FooterInstagramComponent,
    FooterCoursesComponent,
    FooterNewsLettersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    AngularTourModule.forChild(),
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    DeviceMenuComponent
  ]
})

export class CoreModule { }
