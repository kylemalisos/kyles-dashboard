import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { Constants } from '../config/constants';
import { PollenData, PollenCount, PollenRisk } from '../../models/pollen-data';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(
    private http: HttpClient,
    private constants: Constants
  ) { }

  public async getPollen() {
    let pollenUrl = this.constants.PollenApi;
    let pollenHeaders = new HttpHeaders({
      'x-api-key': this.constants.PollenApiKey
    });
    let pollenParams = new HttpParams();
    pollenParams = pollenParams.append("lat", this.constants.KC_LAT);
    pollenParams = pollenParams.append("lng", this.constants.KC_LON);
    pollenParams = pollenParams.append("speciesRisk", true);

    return new Promise(resolve => {
      this.fireRequest(pollenUrl, pollenHeaders, pollenParams).then(data => {
        resolve(data);
      });
    });
  }

  public async getWeather() {
    let weatherUrl = this.constants.WeatherApi;
    let weatherHeaders = new HttpHeaders();
    let weatherParams = new HttpParams();
    weatherParams.append("lat", this.constants.KC_LAT);
    weatherParams.append("lon", this.constants.KC_LAT);
    weatherParams.append("units", this.constants.UNITS);
    weatherParams.append("appid", this.constants.WeatherApiKey);

    return new Promise(resolve => {
      this.fireRequest(weatherUrl, weatherHeaders, weatherParams).then(data => {
        resolve(data);
      });
    });
  }

  async fireRequest(url: string,  headers: HttpHeaders, params: HttpParams ) {
    
    let httpOptions = {}; 
    if (headers) {
      httpOptions = {
        headers: headers,
        params: params
      };
    } else {
      httpOptions = {
        params: params
      };
    }

    return new Promise(resolve => {
      this.http.get<any>(url, httpOptions).subscribe(data => {
        console.log(data);
        resolve(data);
      });
    });
  }
}
