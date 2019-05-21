import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClockCalendarModule } from './clock-calendar/clock-calendar.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClockCalendarModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
