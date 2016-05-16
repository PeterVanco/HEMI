import {Component, Input, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Subscription} from 'rxjs/Rx';
import {MenuInfoDashlet} from './dashboard/dashlet/menuInfoDashlet.component'
import {SensorTypeEnum, Camera} from './service/data.model';
import {HemiService} from './service/hemiService.service';

@Component({
    selector: 'app-menu',
    templateUrl: './tpl/appMenu.component.html',
    directives: [MenuInfoDashlet, ROUTER_DIRECTIVES]
})
export class AppMenu implements OnInit {

    @Input() _router: Router;

    private handler: Subscription;
    private cameras: Camera[];
    private sensorType = SensorTypeEnum;

    constructor(protected _hemiService: HemiService) { }

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

    isRouterLinkActive(params: any[]): boolean {
        return this._router.isRouteActive(this._router.generate(params));
    }

}