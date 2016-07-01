import {Component, Input, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {MenuInfoDashlet} from './dashboard/dashlet/menuInfoDashlet.component'
import {SensorTypeEnum, Camera} from './service/data.model';
import {HemiService} from './service/hemiService.service';
import {MainDashboard} from './dashboard/mainDashboard.component';
import {TempDashboard} from './dashboard/tempDashboard.component';
import {HumidityDashboard} from './dashboard/humidityDashboard.component';
import {SunshineDashboard} from './dashboard/sunshineDashboard.component';
import {SecurityDashboard} from './dashboard/securityDashboard.component';
import {RadarDashboard} from './dashboard/radarDashboard.component';
import {CameraDashboard} from './dashboard/cameraDashboard.component';
import {SingleCameraDashboard} from './dashboard/singleCameraDashboard.component';

export const AppRoutes = [

    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'dashboard',
        component: MainDashboard
    },
    {
        path: 'teplota',
        component: TempDashboard
    },
    {
        path: 'vlhkost',
        component: HumidityDashboard
    },
    {
        path: 'slnecnost',
        component: SunshineDashboard
    },
    {
        path: 'zabezpecenie',
        component: SecurityDashboard
    },
    {
        path: 'radar',
        component: RadarDashboard
    },
    {
        path: 'kamery',
        component: CameraDashboard
    },
    {
        path: 'kamera/:cameraRoute',
        component: SingleCameraDashboard
    }
];

@Component({
    selector: 'app-menu',
    templateUrl: './tpl/appMenu.component.html',
    directives: [MenuInfoDashlet, ROUTER_DIRECTIVES]
})
export class AppMenu implements OnInit {

    private handler: Subscription;
    private cameras: Camera[];
    private sensorType = SensorTypeEnum;

    constructor(protected _router: Router,
        protected _hemiService: HemiService) { }

    ngOnInit() {
        this.handler = this._hemiService.getObservableData(model => {
            try {
                this.cameras = model.cameras;
                this.handler.unsubscribe();
            } catch (ex) {
                console.error("Could not extract cameras for menu");
            }
        });
    }

    navigate(path: string, params: any) {
        console.log("Navigating to", path, "with params", params);
        this._router.navigate(['/' + path, params]);
    }

}