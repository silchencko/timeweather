import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherrequestService } from '../services/weatherrequest.service';

@NgModule({
  declarations: [ WeatherComponent ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ WeatherrequestService ],
  exports: [
    WeatherComponent
  ]
})

export class WeatherModule {}
