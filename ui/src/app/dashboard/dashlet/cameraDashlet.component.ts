import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera, CameraSnapshot} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'camera-dashlet',
    templateUrl: '/tpl/dashboard/dashlet/cameraDashlet.component.html',
	styles: [`
	img {
		width: 100%;	
	}
	`]
})
export class CameraDashlet extends AbstractDashlet<Camera> implements OnInit, OnDestroy {

	@Input()
	set cameraRoute(value: string) {
		this._cameraRoute = value;
		super.triggerLastData();
	}

	private camera: Camera;
	private _cameraRoute: string;
	private snapshot: CameraSnapshot;
	private autorefresh = true;
	private nonAvailableTimelineDate: Date;

	constructor(
		protected _hemiService: HemiService) {
		super(_hemiService);
	}
	
	getCameraRoute() {
		return this._cameraRoute;
	}

	loadSnapshot(snapshot: CameraSnapshot) {
		if (snapshot) {
			this.nonAvailableTimelineDate = null;
			this.autorefresh = snapshot.timestamp == this.camera.latestSnapshot.timestamp;
			this.snapshot = snapshot;
		} else {
			this.nonAvailableTimelineDate = new Date(this.snapshot.timestamp);
		}
	}

	extractData(model: DataModel) {
		console.warn("Loading camera", this._cameraRoute);
		return model.cameras.filter(cam => cam.route == this._cameraRoute)[0];
	}

	handleData(data: Camera) {
		this.camera = data;
		if (this.autorefresh) {
			this.snapshot = this.camera.latestSnapshot;
		}
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}