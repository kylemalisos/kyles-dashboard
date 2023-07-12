import { Component } from '@angular/core'
import { ApiCallService } from '../services/apicall.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  constructor(private apicallservice: ApiCallService) {}

  ngOnInit() {
    this.getWeatherData();
  }

  async getWeatherData() {
    this.apicallservice.getWeather().then(data => {
      this.populateData(data);
    });
  }

  populateData(data: any) {
    console.log(data.name);
  }
}
