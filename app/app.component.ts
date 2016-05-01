import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppMenu} from './appMenu.component';
import {Camera} from './camera';
import {CurrentTime} from './dashboard/dashlet/currentTime.component';
import {MainDashboard} from './dashboard/mainDashboard.component';
import {TempDashboard} from './dashboard/tempDashboard.component';
import {CameraDashboard} from './dashboard/cameraDashboard.component';
import {HemiService} from './service/hemiService.service';

@Component({
    selector: 'app',
    templateUrl: './tpl/app.component.html',
  //   template: `<h1>HEMI</h1>
  // <nav>
  // {{_router}}
  //   <a [routerLink]="['MainDashboard']">Main Dashboard</a>
  //   <a [routerLink]="['CameraDashboard', { cameraRoute: camera.route }]" *ngFor="#camera of _hemiService.cameras">Camera Dashboard - {{camera.name}}</a>
  // </nav>
  // <router-outlet></router-outlet>`,
  directives: [CurrentTime, AppMenu, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'MainDashboard', component: MainDashboard, useAsDefault: true },
  { path: '/teplota', name: 'TempDashboard', component: TempDashboard },
  { path: '/kamery', name: 'CameraDashboard', component: CameraDashboard },
  { path: '/kamera/:cameraRoute', name: 'SingleCameraDashboard', component: CameraDashboard }
  // {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
  // {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])
export class AppComponent {

  constructor(private _router: Router,
    private _hemiService: HemiService) {
  }

}