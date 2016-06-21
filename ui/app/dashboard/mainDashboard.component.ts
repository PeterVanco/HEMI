import {Component, ViewChild, AfterViewInit, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {AbstractDashboard} from './abstractDashboard.component';
import {InfoDashlet} from './dashlet/infoDashlet.component';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {ChartDashlet} from './dashlet/chartDashlet.component';
import {IFrameDashlet} from './dashlet/iframeDashlet.component'
import {WeatherForecastDashlet} from './dashlet/WeatherForecastDashlet.component';
import {ChartDashletRangeSelector} from './dashlet/control/chartDashletRangeSelector.component';
import {CarouselItemSelector} from './dashlet/control/carouselItemSelector.component';

@Component({
    selector: 'main-dashboard',
    templateUrl: '../tpl/dashboard/mainDashboard.component.html',
    directives: [ChartDashlet, InfoDashlet, CameraDashlet, ChartDashletRangeSelector, CarouselItemSelector, WeatherForecastDashlet, IFrameDashlet]
})
export class MainDashboard extends AbstractDashboard implements AfterViewInit {

	private name: string;
	@ViewChild('temperatureChart')
	temperatureChart: ChartDashlet;

    ngAfterViewInit() {
		super.ngAfterViewInit();
		AbstractDashboard.equalizeDashletHeights($('#carousel-cameras'), $('#carousel-weather'));
	}

}