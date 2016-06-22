import {Component, Input, AfterViewInit, ViewChildren, QueryList} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {DataModel, CameraSnapshot, SensorTypeEnum} from '../service/data.model';
import {AbstractDashboard} from './abstractDashboard.component';
import {AsyncPipe} from 'angular2/common';
import {Subject} from 'rxjs/subject'
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject'
import {TimelineCameraSnapshot} from './dashlet/cameraTimelineDashlet.component'

@Component({
	pipes: [AsyncPipe]
})
export abstract class AbstractCameraDashboard extends AbstractDashboard implements AfterViewInit {

	@ViewChildren(CameraDashlet)
	cameras: QueryList<CameraDashlet>;

	cameraRoutes: Subject<string[]> = new BehaviorSubject([]);

	ngAfterViewInit() {
		super.ngAfterViewInit();
		this.cameraRoutes.next(this.cameras.map(camera => camera.getCameraRoute()));
	}

	onTimelineChanged(snapshot: TimelineCameraSnapshot) {
		if (snapshot) {
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