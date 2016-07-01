import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
export class SingleCameraDashboard extends AbstractCameraDashboard implements OnInit, OnDestroy {

	private cameraRoute: string;
	private routeSubscription: any;

	constructor(private route: ActivatedRoute) {
		super();
	}

	ngOnInit() {
		this.routeSubscription = this.route.params.subscribe(params => {
			console.log("Route changed to ", params);
			this.cameraRoute = params['cameraRoute'];
		});
	}

	ngOnDestroy() {
		this.routeSubscription.unsubscribe();
	}
}