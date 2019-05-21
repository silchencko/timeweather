import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherInfo } from '../weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherrequestService {
  url = 'http://api.openweathermap.org/data/2.5/weather?id=709930&APPID=6bf11debf8b2e726bc1f2258d4fbdf6d&units=metric';

  constructor(private http: HttpClient) {}

  getRequest() {
    // Get the full response with the observe option:
    return this.http.get<WeatherInfo>(this.url, { observe: 'response' });
  }
}
