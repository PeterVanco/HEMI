import {Component, ElementRef, Input, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {HemiService} from '../../service/hemiService.service';
import {WeatherDataModel} from '../../service/data.model';
import {TempPipe} from '../../util/temp.pipe';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {DomSanitizationService, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'weather-forecast-dashlet',
    templateUrl: '/tpl/dashboard/dashlet/weatherForecastDashlet.component.html',
    styleUrls: ['../../dist/css/dashboard/dashlet/weatherForecastDashlet.css'],
    pipes: [TempPipe]
})
export class WeatherForecastDashlet implements AfterViewInit {

    private API_KEY = '7040af11ef98d962f35f954eba225570';

    @Input()
    city: string;

    private forecast: any[];

    constructor(public el: ElementRef,
        private sanitizer: DomSanitizationService,
        private _hemiService: HemiService,
        private http: Http) {
    }

    private getApiUrl() {
        return 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.city + '&mode=json&units=metric&cnt=3&APPID=' + this.API_KEY;
    }

    private resolveForecastDay(timestamp: number) {
        let date = new Date(timestamp * 1000);
        let days = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'];
        return days[date.getDay()];
    }

    get format() {
        return '.1-1';
    }

    sanitizeWidth(dayCount: number) {
        return this.sanitizer.bypassSecurityTrustStyle('width: ' + (100 / dayCount) + '%');
    }

    ngAfterViewInit() {
        this.http.get(this.getApiUrl())
            .catch(this._hemiService.handleHttpError)
            .subscribe(res => {
                if (res == null) {
                    return;
                }
                let response = res.json();
                this.forecast = response.list;
            });
    }

}  