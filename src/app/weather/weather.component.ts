import {Component, OnInit} from '@angular/core';
import {WeatherrequestService} from '../services/weatherrequest.service';

export interface WeatherInfo {
  name: string;
  weather: [{id: number, main: string, description: string, icon: string}];
  iconSrc: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo: WeatherInfo;
  constructor(private weatherService: WeatherrequestService) {}
  ngOnInit() {
    this.showWeather();
  }
  showWeather() {
    this.weatherService.getRequest()
      .subscribe(response => {
        const resp = response;
        this.weatherInfo = {...resp.body};
        this.weatherInfo.iconSrc = 'http://openweathermap.org/img/w/' + this.weatherInfo.weather[0].icon +  '.png';
      });
  }
}
