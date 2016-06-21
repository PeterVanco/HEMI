import {Component, AfterViewInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppMenu} from './appMenu.component';
import {CurrentTime} from './dashboard/dashlet/currentTime.component';
import {MainDashboard} from './dashboard/mainDashboard.component';
import {TempDashboard} from './dashboard/tempDashboard.component';
import {CameraDashboard} from './dashboard/cameraDashboard.component';
import {RadarDashboard} from './dashboard/radarDashboard.component';
import {SingleCameraDashboard} from './dashboard/singleCameraDashboard.component';
import {HemiService} from './service/hemiService.service';
import {SystemStatusDashlet} from './dashboard/dashlet/systemStatusDashlet.component';

@Component({
    selector: 'app',
    templateUrl: './tpl/app.component.html',
    directives: [CurrentTime, AppMenu, SystemStatusDashlet, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'MainDashboard', component: MainDashboard, useAsDefault: true },
    { path: '/teplota', name: 'TempDashboard', component: TempDashboard },
    { path: '/radar', name: 'RadarDashboard', component: RadarDashboard },
    { path: '/kamery', name: 'CameraDashboard', component: CameraDashboard },
    { path: '/kamera/:cameraRoute', name: 'SingleCameraDashboard', component: SingleCameraDashboard }
])
export class AppComponent implements AfterViewInit {

    constructor(private _router: Router,
        private _hemiService: HemiService) {
    }

    ngAfterViewInit() {
        $(window).trigger('resize');
    }

}