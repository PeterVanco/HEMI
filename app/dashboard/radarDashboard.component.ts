import {Component, OnInit, OnDestroy, AfterViewInit} from 'angular2/core';
import {AbstractDashboard} from './abstractDashboard.component';
import {IFrameDashlet} from './dashlet/iframeDashlet.component'

@Component({
    selector: 'radar-dashboard',
    templateUrl: '../tpl/dashboard/radarDashboard.component.html',
	directives: [IFrameDashlet]
})
export class RadarDashboard extends AbstractDashboard implements AfterViewInit {

    ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setFullHeight();
		$(window).resize(e => this.setFullHeight());
	}

	private setFullHeight() {
		$(".box-body-radar").height($(".content-wrapper").height() - 100);
		$('#iframe-radar').height($('.box-body-radar').height());
	}

}