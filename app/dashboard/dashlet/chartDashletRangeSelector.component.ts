import {Component, Input, OnInit, OnDestroy, NgZone} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {ChartDashlet} from './highchartDashlet.component';

@Component({
    selector: 'chart-dashlet-range-selector',
    template: `<div class="btn-group" data-toggle="btn-toggle">
					<button type="button" (click)="handleClick(24 * 3600 * 1000)" class="btn btn-default btn-sm active" data-toggle="on">24 hodin</button>
					<button type="button" (click)="handleClick(3 * 24 * 3600 * 1000)" class="btn btn-default btn-sm" data-toggle="off">3 dni</button>
					<button type="button" (click)="handleClick(7 * 24 * 3600 * 1000)" class="btn btn-default btn-sm" data-toggle="off">7 dni</button>
			   </div>`
})
export class ChartDashletRangeSelector implements OnInit, OnDestroy {

	@Input()
	chartDashlet: ChartDashlet;

	constructor() {

	}

	handleClick(period: number) {
		if (this.chartDashlet != null) {
			this.zoomChart(period);
		}
	}

	ngOnInit() {

	}

	ngOnDestroy() {

	}

	public zoomChart(period: number) {
		var tsTo = Math.round(new Date().getTime());
		var tsFrom = tsTo - period;

		this.chartDashlet.getPlot().xAxis[0].setExtremes(tsFrom, tsTo);
		(this.chartDashlet.getPlot() as any).showResetZoom();
	}

}