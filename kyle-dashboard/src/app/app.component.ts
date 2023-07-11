import { Component } from '@angular/core';
import { PollenCount } from '../models/pollen-count';
import { PollenRisk } from '../models/pollen-risk';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    pollenCount: PollenCount = {
        grass_pollen: 0,
        tree_pollen: 0,
        weed_pollen: 0
    };
    pollenRisk: PollenRisk = {
        grass_pollen: '',
        tree_pollen: '',
        weed_pollen: ''
    }

    constructor(private http: HttpClient) {}

    title = 'default-angular';

    ngOnInit() {
        let headers = new HttpHeaders({
            'x-api-key': 'b4859e2a5e78199c2e91c4b4fdf54f45310ca65b3752d88e7e05211caee5c05a'
        });

        this.http.get<any>('https://api.ambeedata.com/latest/pollen/by-lat-lng?lat=39.4528&lng=94.3422&speciesRisk=true', {
            headers: headers
        }).subscribe(data => {
            this.populateData(data);
            console.log(data);
        });
    }

    populateData(data: any) {
        this.pollenCount = data.data[0].Count;
        this.pollenRisk = data.data[0].Risk;

        console.log(this.pollenCount);
        console.log(this.pollenRisk);
    }
}
