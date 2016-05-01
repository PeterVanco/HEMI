import {Component, Input} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuInfoDashlet} from './dashboard/dashlet/menuInfoDashlet.component'

@Component({
    selector: 'app-menu',
    templateUrl: './tpl/appMenu.component.html',
    directives: [MenuInfoDashlet, ROUTER_DIRECTIVES]
})
export class AppMenu {

  @Input() _router: Router;

  isRouterLinkActive(link: string): boolean {
    return this._router.isRouteActive(this._router.generate([link]));
  }

}