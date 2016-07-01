import {Component, ElementRef, Input, OnInit, OnDestroy, AfterViewInit, NgZone} from '@angular/core';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, StorageInfo} from '../../service/data.model';
import {AbstractDashboard} from '../abstractDashboard.component';
import {AbstractChartDashlet} from './abstractChartDashlet.component';
import {Http} from '@angular/http';

declare var ResizeSensor: any;

@Component({
    selector: 'storage-info-dashlet',
    templateUrl: '/tpl/dashboard/dashlet/storageInfoDashlet.component.html',
	styles: [`
	.box-body {
		width: 100%;
	}
	.chart {
		height: 100%;
		width: 100%;
	}
	`]
})
export class StorageInfoDashlet extends AbstractChartDashlet<StorageInfo> implements OnInit, OnDestroy, AfterViewInit {

    constructor(protected el: ElementRef,
        protected _hemiService: HemiService,
        protected http: Http) {
        super(el, _hemiService, http);
    }
	
	ngAfterViewInit() {
		super.ngAfterViewInit();
		AbstractDashboard.equalizeDashletHeights($('#camera-box').find(".box-body"), $(this.el.nativeElement).find(".box-body"), () => {
			if (this.plot) {
				this.plot.reflow();
			}
		});
	}

	extractData(model: DataModel) {
		console.info("Got model data", model);

		return model.storageInfo;
	}

	handleData(data: StorageInfo) {

		let plotData = [{
			name: 'Použité miesto',
			y: data.totalBytes - data.freeBytes
		}, {
				name: 'Voľné miesto',
				y: data.freeBytes
			}];

		console.warn("Rendering ...");

		this.plot.series[0].setData(plotData);
		this.plot.reflow();
	}

}