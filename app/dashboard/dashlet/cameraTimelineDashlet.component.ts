import {Component, ElementRef, Input, OnInit, OnDestroy, AfterViewInit} from 'angular2/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
	host: {
		styles: "timeCube"
	},
    selector: 'camera-timeline-dashlet',
    template: ''
})
export class CameraTimelineDashlet extends AbstractDashlet<Camera> implements OnInit, OnDestroy, AfterViewInit {

	@Input() cameraRoute: string;
	private camera: Camera;

	constructor(public _el: ElementRef,
		protected _hemiService: HemiService) {
		super(_hemiService);

		_el.nativeElement.addEventListener('touchstart', function (e) {
			if ($(e.target).is('a, iframe')) {
				return true;
			}
			e.preventDefault();
		});
		_el.nativeElement.addEventListener('touchmove', function (e) {
			e.preventDefault();
		});

		$(window).resize(e => this.initTimeline());
	}

	private initTimeline() {
		$(this._el.nativeElement).empty();
		($(this._el.nativeElement) as any).timeCube({
			data: this.buildData(),
			granularity: "month",
			startDate: new Date('May 1, 2011 10:20:00 pm GMT+0'),
			endDate: new Date('September 30, 2011 02:20:00 am GMT+0'),
			nextButton: $("#next-link"),
			previousButton: $("#prev-link"),
			showDate: false,
			onTimelineChange: index => console.log(index)
		});
	}

	extractData(model: DataModel) {
		return model.cameras.filter(cam => cam.route == this.cameraRoute)[0];
	}

	handleData(data: Camera) {
		this.camera = data;
		console.log(this.camera.latestSnapshot.uri);
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	private buildData() {
		return [{
			startDate: (new Date('May 10, 2011 10:29:00 pm GMT+0')),
		},
			{
				startDate: (new Date('June 15, 2011 00:00:00 am GMT+0')),
			},
            {
				startDate: (new Date('July 18, 2011 00:00:00 am GMT+0')),
			},
			{
				startDate: (new Date('July 1, 2011 00:00:00 am GMT+0')),
			},
			{
				startDate: (new Date('August 4, 2011 00:00:00 am GMT+0')),
			},
			{
				startDate: (new Date('August 30, 2011 00:00:00 am GMT+0')),
			}];
	}

	ngAfterViewInit() {
		this.initTimeline();
	}


}