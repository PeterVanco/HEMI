import {Component, Input, OnInit, OnDestroy} from 'angular2/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {HemiService} from '../../service/hemiService.service';
import {DataModel, Camera, CameraSnapshot} from '../../service/data.model';
import {AbstractDashlet} from './abstractDashlet.component';

@Component({
    selector: 'camera-dashlet',
    templateUrl: '../../tpl/dashboard/dashlet/cameraDashlet.component.html',
	styles: [`
	img {
		width: 100%;	
	}
	`]
})
export class CameraDashlet extends AbstractDashlet<Camera> implements OnInit, OnDestroy {

	@Input()
	private cameraRoute: string;

	private camera: Camera;
	private snapshotUri: string;
	private autorefresh = true;

	constructor(
		protected _hemiService: HemiService) {
		super(_hemiService);
	}

	loadSnapshot(snapshot: CameraSnapshot) {
		if (snapshot) {
			this.autorefresh = snapshot.timestamp == this.camera.latestSnapshot.timestamp;
			this.snapshotUri = snapshot.uri;
		}
	}

	extractData(model: DataModel) {
		return model.cameras.filter(cam => cam.route == this.cameraRoute)[0];
	}

	handleData(data: Camera) {
		this.camera = data;
		if (this.autorefresh) {
			this.snapshotUri = this.camera.latestSnapshot.uri;
		}
	}

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}