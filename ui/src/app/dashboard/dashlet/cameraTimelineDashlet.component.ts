import {Component, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera, CameraSnapshot} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';
import {AbstractDashboard} from '../abstractDashboard.component';

declare var ResizeSensor: any;

export interface CameraSnapshotWithRoute extends CameraSnapshot {
	cameraRoute: string;
}

export interface TimelineCameraSnapshot {
	// snapshots: Map<string, CameraSnapshot>,
	snapshots: CameraSnapshotWithRoute[]
	startDate: Date
}

@Component({
	host: {
		styles: "timeCube"
	},
    selector: 'camera-timeline-dashlet',
    templateUrl: '/src/tpl/dashboard/dashlet/cameraTimelineDashlet.component.html',
	styles: [`
	.timeCube {
		margin: 0px;
	}
	.box-body.timeline-button {
		padding-left: 0px;
		padding-right: 0px;
		display: table-cell;
		vertical-align: middle;	
	}
	.box-body.timeline-button:not(.disabled) {
		cursor: pointer;
	}
	.box-body.timeline-button.disabled {
		opacity: 0.5;
	}
	.box-body.timeline-button>img {
		width: 100%;
	}
	`]
})
export class CameraTimelineDashlet extends AbstractDashlet<Camera[]> implements AfterViewInit {

	@Input()
	set cameraRoutes(value: string[]) {
		this._cameraRoutes = value;
		super.triggerLastData();
	}
	private _cameraRoutes: string[];

	@Output() timelineChanged: EventEmitter<TimelineCameraSnapshot> = new EventEmitter<TimelineCameraSnapshot>();

	private cameras: Camera[];
	private resizeHandler: number;
	private currentIndex: number = -1;

	constructor(public _el: ElementRef,
		protected _hemiService: HemiService) {
		super(_hemiService);

		this.getTimelineElement().on('touchstart', function (e) {
			if ($(e.target).is('a, iframe')) {
				return true;
			}
			e.preventDefault();
		});
		this.getTimelineElement().on('touchmove', function (e) {
			e.preventDefault();
		});
	}

	private getTimelineElement() {
		return $(this._el.nativeElement).find(".box-body-timeline");
	}

	private reinitTimeline(keepIndex: boolean = true) {

		let timeline: any;
		let timelineData: TimelineCameraSnapshot[] = this.buildData();
		let timelineMin: number = Math.min.apply(null, timelineData.map(obj => obj.startDate));
		let timelineMax: number = Math.max.apply(null, timelineData.map(obj => obj.startDate));

		this.getTimelineElement().empty();
		(this.getTimelineElement() as any).timeCube({
			data: timelineData,
			// granularity: (this.camera || { snapshotsGranularity: "month" }).snapshotsGranularity,
			granularity: "month",
			startDate: new Date(timelineMin - (timelineMax - timelineMin) / 10),
			endDate: new Date(timelineMax + (timelineMax - timelineMin) / 10),
			previousButton: $(this._el.nativeElement).find(".timeline-previous"),
			nextButton: $(this._el.nativeElement).find(".timeline-next"),
			showDate: false,
			initialIndex: this.currentIndex == -1 ? timelineData.length - 1 : this.currentIndex,
			onTimelineChange: (index: number) => {
				this.currentIndex = index;
				console.log("Emitting event for:", timelineData[index], index);
				this.timelineChanged.emit(timelineData[index]);
			},
			saveReference: ref => timeline = ref
		});
	}

	extractData(model: DataModel) {
		return model.cameras.filter(cam => (this._cameraRoutes || []).some(cr => cam.route == cr));
	}

	handleData(data: Camera[]) {
		this.cameras = data;
		this.reinitTimeline();
	}

	private buildData() {
		let snapshots: TimelineCameraSnapshot[] = [];
		if (this.cameras) {

			let allSnapshots: CameraSnapshotWithRoute[] = [].concat.apply([], this.cameras.map(camera =>
				camera.snapshots.map(snapshot =>
					$.extend(snapshot, { cameraRoute: camera.route })
				)
			));

			let snapshotMap = allSnapshots.reduce((map, snapshot) => {
				let snapshotsForTimestamp = (map.get(snapshot.timestamp) || []).concat(snapshot);
				map.set(snapshot.timestamp, snapshotsForTimestamp);
				return map;
			}, new Map<number, CameraSnapshotWithRoute[]>());

			snapshotMap.forEach((snapsWithRoute, timestamp) => {
				snapshots.push({
					// snapshots: snapsWithRoute.reduce((map, s) => {
					// 	map.set(s.cameraRoute, s);
					// 	return map;
					// }, new Map<string, CameraSnapshot>()),
					snapshots: snapsWithRoute,
					startDate: new Date(timestamp)
				});
			});

			// this.cameras.forEach(cam => {
			// 	cam.snapshots.forEach(snap => {
			// 		console.log(snap);

			// 		snapshots.push({
			// 			snapshots: new Map<string, CameraSnapshot>(),
			// 			startDate: new Date(snap.timestamp)
			// 		});

			// 		snapshots.push($.extend(snap, {
			// 			cameraRoute: cam.route,
			// 			startDate: new Date(snap.timestamp)
			// 		}));
			// 	});
			// });

		}
		return snapshots;
	}

	ngAfterViewInit() {
		this.reinitTimeline();
		new ResizeSensor($(this._el.nativeElement).find(".box-timeline"), () =>
			this.reinitTimeline()
		);
		$(this._el.nativeElement).find(".timeline-button").each((i, child) => 
			AbstractDashboard.equalizeDashletHeights($(this._el.nativeElement).find(".box-body-timeline"), $(child))
		);
	}

}