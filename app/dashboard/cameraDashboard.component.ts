import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {AbstractDashboard} from './abstractDashboard.component';
import {CameraDashlet} from './dashlet/cameraDashlet.component';
import {HemiService} from '../service/hemiService.service';

@Component({
    selector: 'camera-dashboard',
    templateUrl: '../tpl/dashboard/cameraDashboard.component.html',
    directives: [CameraDashlet],
})
export class CameraDashboard extends AbstractDashboard implements OnInit, OnDestroy {

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}