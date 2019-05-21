import {Component, OnInit} from '@angular/core';
import {WeatherrequestService} from '../services/weatherrequest.service';

export interface WeatherInfo {
  base: string;
  clouds: {all: number};
  cod: number;
  coord: {lon: number, lat: number};
  dt: number;
  id: number;
  main: {temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number};
  name: string;
  sys: {type: number, id: number, message: number, country: string, sunrise: number, sunset: number};
  visibility: number;
  weather: [{id: number, main: string, description: string, icon: string}];
  wind: {speed: number, deg: number};
  iconSrc: string;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  headers;
  error;
  weatherInfo: WeatherInfo;
  constructor(private weatherService: WeatherrequestService) {}
  ngOnInit() {
    // this.weatherService.getRequest();
    this.showWeather();
  }
  showWeather() {
    this.weatherService.getRequest()
      // clone the data object, using its known WeatherInfo shape
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.weatherInfo = {...resp.body};
        this.weatherInfo.iconSrc = 'http://openweathermap.org/img/w/' + this.weatherInfo.weather[0].icon +  '.png';
      },
        error => this.error = error);
  }
}
