import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockCalendarComponent } from './clock-calendar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClockComponent } from './clock/clock.component';
import { WeatherrequestService } from '../services/weatherrequest.service';

@NgModule({
  declarations: [
    ClockCalendarComponent,
    ClockComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ WeatherrequestService ],
  exports: [
    ClockCalendarComponent,
    ClockComponent,
    CalendarComponent
  ]
})
export class ClockCalendarModule {}
