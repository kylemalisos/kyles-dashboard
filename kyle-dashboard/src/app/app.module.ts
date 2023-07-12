import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollenComponent } from './pollen/pollen.component';
import { WeatherComponent } from './weather/weather.component';

import { ApiCallService } from './services/apicall.service';

@NgModule({
  declarations: [
    AppComponent,
    PollenComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
