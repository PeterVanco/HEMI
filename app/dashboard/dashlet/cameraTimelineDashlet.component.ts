import {Component, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, AfterViewInit} from 'angular2/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera, CameraSnapshot} from '../../service/data.model';
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
	@Output() timelineChanged: EventEmitter<CameraSnapshot> = new EventEmitter();

	private camera: Camera;
	private resizeHandler: number;
	private currentIndex: number = -1;

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

		$(window).resize(e => {
			clearTimeout(this.resizeHandler);
			this.resizeHandler = setTimeout(t => {
				this.reinitTimeline();
			}, 500);
		});
	}

	private reinitTimeline(keepIndex: boolean = true) {

		let timeline: any;
		let timelineData: any[] = this.buildData();
		let timelineMin: number = Math.min.apply(null, timelineData.map(obj => obj.startDate));
		let timelineMax: number = Math.max.apply(null, timelineData.map(obj => obj.startDate));

		$(this._el.nativeElement).empty();
		($(this._el.nativeElement) as any).timeCube({
			data: timelineData,
			granularity: (this.camera || { snapshotsGranularity: "month" }).snapshotsGranularity,
			startDate: new Date(timelineMin - (timelineMax - timelineMin) / 10),
			endDate: new Date(timelineMax + (timelineMax - timelineMin) / 10),
			nextButton: $("#next-link"),
			previousButton: $("#prev-link"),
			showDate: false,
			initialIndex: this.currentIndex == -1 ? timelineData.length - 1 : this.currentIndex,
			onTimelineChange: (index: number) => {
				this.currentIndex = index;
				// console.log("Emitting event for:", timelineData[index]);
				this.timelineChanged.emit(timelineData[index]);
			},
			saveReference: ref => timeline = ref
		});
	}

	extractData(model: DataModel) {
		return model.cameras.filter(cam => cam.route == this.cameraRoute)[0];
	}

	handleData(data: Camera) {
		this.camera = data;
		console.log(this.camera.latestSnapshot.uri);
		this.reinitTimeline();
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	private buildData() {
		let snapshots: any[] = [];
		if (this.camera) {
			this.camera.snapshots.forEach(snap => {
				console.log(snap);
				snapshots.push($.extend(snap, {
					startDate: new Date(snap.timestamp)
				}));
			});
		}
		return snapshots;
	}

	ngAfterViewInit() {
		this.reinitTimeline();
	}


}