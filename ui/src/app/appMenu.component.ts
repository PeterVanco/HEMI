import {Component, Input, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {MenuInfoDashlet} from './dashboard/dashlet/menuInfoDashlet.component'
import {SensorTypeEnum, Camera} from './service/data.model';
import {HemiService} from './service/hemiService.service';

@Component({
    selector: 'app-menu',
    templateUrl: './src/tpl/appMenu.component.html',
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