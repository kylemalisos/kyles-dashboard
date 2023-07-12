import { Component } from '@angular/core'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ApiCallService } from '../services/apicall.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  lat = 39.099724;
  lng = -94.578331;

  constructor(private apicallservice: ApiCallService, private http: HttpClient) {}

  ngOnInit() {
    this.getWeatherData();
  }

  async getWeatherData() {
    this.apicallservice.getWeather().then(data => {
      this.populateData(data);
    })

    // Maybe try this from the service???
    // let weathernUrl = 'https://api.openweathermap.org/data/2.5/weather';
    // let weatherHeaders = new HttpHeaders();
    // let weatherParams = new HttpParams();
    // weatherParams = weatherParams.append("lat", this.lat);
    // weatherParams = weatherParams.append("lon", this.lng);
    // weatherParams = weatherParams.append("units", "imperial");
    // weatherParams = weatherParams.append("appid", '5df9ef57f640a303cc7406c7aeb43def');

    // lastValueFrom(await this.fireRequest(weathernUrl, weatherHeaders, weatherParams)).then(data => {
    //   console.log(data);
    // }); 
  }

  async fireRequest(url: string, headers: HttpHeaders, params: HttpParams) {
    const httpOptions = {
      headers: headers,
      params: params
    };

    let result = this.http.get<any>(url, httpOptions);
    return result;
  }

  populateData(data: any) {
    console.log(data);
  }
}
