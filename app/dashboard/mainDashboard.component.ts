import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {AbstractDashboard} from './abstractDashboard.component';
import {InfoDashlet} from './dashlet/infoDashlet.component';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {ChartDashlet} from './dashlet/highChartDashlet.component';
import {ChartDashletRangeSelector} from './dashlet/chartDashletRangeSelector.component';

@Component({
    selector: 'main-dashboard',
    templateUrl: '../tpl/dashboard/mainDashboard.component.html',
    directives: [ChartDashlet, InfoDashlet, CameraDashlet, ChartDashletRangeSelector]
})
export class MainDashboard extends AbstractDashboard implements OnInit, OnDestroy, AfterViewInit {

	private name: string;
	@ViewChild('temperatureChart')
	temperatureChart: ChartDashlet;

	constructor(private http: Http) {
		super();
	}

    ngAfterViewInit() {
		$(window).resize(e => {
			$('#weather-radar').height($('#carousel-example-generic').height());
			// ($('#equalize-height') as any).equalHeights();
		});
		// ($('#equalize-height') as any).equalHeights();
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}