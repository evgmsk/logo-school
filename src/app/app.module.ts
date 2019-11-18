import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {AngularTourModule} from 'ng3-tour';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

// import {AngularTourModule} from './modules/angular-tour/ng-tour.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { PagesComponent } from './modules/pages/pages.component';
import {CoreModule} from './common/core.module';
import {HomeModule} from './modules/home/home.module';
// import {CoursesModule} from './modules/courses/courses.module';
import {SharedModule} from './shared/shared.module';
import {StaffService} from './services/staff.service';
import {PhotoEffect} from './store/app.effects';
import {reducers} from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    // CoursesModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PhotoEffect]),
    AngularTourModule.forRoot(),
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
