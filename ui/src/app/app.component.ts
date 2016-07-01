import {Component, AfterViewInit} from '@angular/core';
import {AppMenu} from './appMenu.component';
import {CurrentTime} from './dashboard/dashlet/currentTime.component';
import {SystemStatusDashlet} from './dashboard/dashlet/systemStatusDashlet.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MainDashboard} from './dashboard/mainDashboard.component';
import {TempDashboard} from './dashboard/tempDashboard.component';
import {RadarDashboard} from './dashboard/radarDashboard.component';
import {CameraDashboard} from './dashboard/cameraDashboard.component';
import {SingleCameraDashboard} from './dashboard/singleCameraDashboard.component';

@Component({
    selector: 'app',
    templateUrl: '/tpl/app.component.html',
    directives: [CurrentTime, AppMenu, SystemStatusDashlet, ROUTER_DIRECTIVES],
    precompile: [MainDashboard, TempDashboard, RadarDashboard, CameraDashboard, SingleCameraDashboard]
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit() {
        $(window).trigger('resize');
    }

}