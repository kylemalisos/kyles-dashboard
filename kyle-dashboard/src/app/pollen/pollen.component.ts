import { Component } from '@angular/core';
import { PollenCount, PollenRisk } from '../../models/pollen-data';
import { ApiCallService } from '../services/apicall.service';

@Component({
  selector: 'app-pollen',
  templateUrl: './pollen.component.html',
  styleUrls: ['./pollen.component.scss']
})
export class PollenComponent {

  pollenCount: PollenCount = {
    grass_pollen: 0,
    tree_pollen: 0,
    weed_pollen: 0
  };
  pollenRisk: PollenRisk = {
    grass_pollen: '',
    tree_pollen: '',
    weed_pollen: ''
  };

  constructor(
    private apicallservice: ApiCallService
  ) {}

  ngOnInit() {
    this.getPollenData();
  }

  async getPollenData() {
    this.apicallservice.getPollen().then(data => {
      this.populateData(data);
    });
  }

  populateData(data: any) {
    data = data.data[0];

    this.pollenCount = data.Count;
    this.pollenRisk = data.Risk;

    console.log(this.pollenCount);
    console.log(this.pollenRisk);
  }
}
