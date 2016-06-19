import {Component, Input, AfterViewInit, ViewChildren, QueryList} from 'angular2/core';
import {Subscription} from 'rxjs/Rx';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {DataModel, CameraSnapshot, SensorTypeEnum} from '../service/data.model';
import {AbstractDashboard} from './abstractDashboard.component';

export abstract class AbstractCameraDashboard extends AbstractDashboard {

	@ViewChildren(CameraDashlet)
	cameras: QueryList<CameraDashlet>;

	onTimelineChanged(snapshot: CameraSnapshot) {
		// console.log("Received event for:", snapshot);
		this.cameras.forEach(camera => camera.loadSnapshot(snapshot));
	}

}