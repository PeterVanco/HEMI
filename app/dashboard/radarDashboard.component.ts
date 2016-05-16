import {Component, OnInit, OnDestroy} from 'angular2/core';
import {AbstractDashboard} from './abstractDashboard.component';
import {IFrameDashlet} from './dashlet/iframeDashlet.component'

@Component({
    selector: 'camera-dashboard',
    templateUrl: '../tpl/dashboard/radarDashboard.component.html',
	directives: [IFrameDashlet]
})
export class RadarDashboard extends AbstractDashboard implements OnInit, OnDestroy {

	ngOnInit() {
		super.ngOnInit();
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}