import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagesComponent } from './pages/pages.component';
import {CoreModule} from './common/core.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {PhotoService} from './services/photo.service';
import {PhotoEffect} from './store/app.effects';
import {reducers} from './store/app.reducers';

// reducers['router'] =  routerReducer;

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PhotoEffect]),
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
