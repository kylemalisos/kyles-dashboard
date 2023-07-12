import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constants {
    public readonly API_ENDPOINT: string = ' https://www.userdomain.com/';
    public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/';
    public static TitleOfSite: string = " Making API calls the Right Way by Monica";
    // LONGITUDE AND LATITUDE
    public readonly KC_LAT: number = 39.099724;
    public readonly KC_LON: number = -94.578331;
    public readonly UNITS: 'imperial';

    //API ENDPOINTS
    public readonly PollenApi: string = 'https://api.ambeedata.com/latest/pollen/by-lat-lng';
    public readonly WeatherApi: string = 'https://api.openweathermap.org/data/2.5/weather';

    //API KEYS
    public readonly PollenApiKey: string = 'b4859e2a5e78199c2e91c4b4fdf54f45310ca65b3752d88e7e05211caee5c05a';
    public readonly WeatherApiKey: string = '5df9ef57f640a303cc7406c7aeb43def';
}