import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockCalendarComponent } from './clock-calendar/clock-calendar.component';
import { WeatherComponent } from './weather/weather.component';
import { ClockComponent } from './clock/clock.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherrequestService } from './services/weatherrequest.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockCalendarComponent,
    WeatherComponent,
    ClockComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherrequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
