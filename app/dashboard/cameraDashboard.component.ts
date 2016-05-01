import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {Camera} from '../camera';
import {HemiService} from '../service/hemiService.service';

@Component({
    selector: 'camera-dashboard',
    template: `This is a camera {{ camera?.name }} dashboard
				<camera-dashlet *ngIf="camera" [camera]="camera"></camera-dashlet>
    `,
    directives: [CameraDashlet],
})
export class CameraDashboard implements OnInit {

	private camera: Camera;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _hemiService: HemiService) { }

	ngOnInit() {
		this.camera = this._hemiService.getCameraByRoute(this._routeParams.get('cameraRoute'));
	}

}