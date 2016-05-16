import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {CameraTimelineDashlet} from './dashlet/cameraTimelineDashlet.component';
import {Camera} from '../service/data.model';
import {HemiService} from '../service/hemiService.service';

@Component({
    selector: 'camera-dashboard',
    templateUrl: '../tpl/dashboard/singleCameraDashboard.component.html',
    directives: [CameraDashlet, CameraTimelineDashlet],
})
export class SingleCameraDashboard implements OnInit {

	private cameraRoute: string;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _hemiService: HemiService) { }

	ngOnInit() {
		this.cameraRoute = this._routeParams.get('cameraRoute');
	}

}