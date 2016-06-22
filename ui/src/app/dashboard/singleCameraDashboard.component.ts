import {Component, OnInit, OnDestroy, AfterViewInit, QueryList} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {CameraTimelineDashlet} from './dashlet/cameraTimelineDashlet.component';
import {Camera, CameraSnapshot} from '../service/data.model';
import {HemiService} from '../service/hemiService.service';
import {AbstractCameraDashboard} from './AbstractCameraDashboard.component';

@Component({
    selector: 'camera-dashboard',
    templateUrl: '../tpl/dashboard/singleCameraDashboard.component.html',
    directives: [CameraDashlet, CameraTimelineDashlet],
})
export class SingleCameraDashboard extends AbstractCameraDashboard implements OnInit {

	private cameraRoute: string;

	constructor(private _routeParams: RouteParams) {
		super();
	}

	ngOnInit() {
		this.cameraRoute = this._routeParams.get('cameraRoute');
	}

}