import {Component, Input} from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {ChartDashlet} from '../chartDashlet.component';

@Component({
    selector: 'chart-dashlet-range-selector',
    template: `<div class="btn-group" data-toggle="btn-toggle">
					<button type="button" (click)="handleClick(1 * 24 * 3600 * 1000)" class="btn btn-default btn-sm">24 hodin</button>
					<button type="button" (click)="handleClick(3 * 24 * 3600 * 1000)" class="btn btn-default btn-sm">3 dni</button>
					<button type="button" (click)="handleClick(7 * 24 * 3600 * 1000)" class="btn btn-default btn-sm">7 dni</button>
			   </div>`
})
export class ChartDashletRangeSelector {

	@Input()
	chartDashlet: ChartDashlet;

	handleClick(period: number) {
		if (this.chartDashlet != null) {
			this.zoomChart(period);
		}
	}

	public zoomChart(period: number) {
		var tsTo = Math.round(new Date().getTime());
		var tsFrom = tsTo - period;

		this.chartDashlet.getPlot().xAxis[0].setExtremes(tsFrom, tsTo);
		(this.chartDashlet.getPlot() as any).showResetZoom();
	}

}