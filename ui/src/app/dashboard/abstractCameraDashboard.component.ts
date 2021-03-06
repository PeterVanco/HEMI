import {Component, Input, AfterViewInit, ViewChildren, QueryList} from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {DataModel, CameraSnapshot, SensorTypeEnum} from '../service/data.model';
import {AbstractDashboard} from './abstractDashboard.component';
import {AsyncPipe} from '@angular/common';
import {Subject, BehaviorSubject} from 'rxjs/Rx'
import {TimelineCameraSnapshot} from './dashlet/cameraTimelineDashlet.component'

@Component({
	pipes: [AsyncPipe]
})
export abstract class AbstractCameraDashboard extends AbstractDashboard implements AfterViewInit {

	@ViewChildren(CameraDashlet)
	cameras: QueryList<CameraDashlet>;

	protected cameraRoutes: Subject<string[]> = new BehaviorSubject([]);

	ngAfterViewInit() {
		super.ngAfterViewInit();
		this.cameraRoutes.next(this.cameras.map(camera => camera.getCameraRoute()));
	}

	onTimelineChanged(snapshot: TimelineCameraSnapshot) {
		if (snapshot && this.cameras) {
			console.warn(snapshot);
			this.cameras
				// .filter(camera => snapshot.snapshots.some(snap =>
				// 	snap.cameraRoute == camera.getCameraRoute()
				// ))
				.forEach(camera =>
					camera.loadSnapshot(snapshot.snapshots.filter(snap =>
						snap.cameraRoute == camera.getCameraRoute())[0]
					));
		}
	}

}