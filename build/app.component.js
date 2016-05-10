System.register(['angular2/core', 'angular2/router', './appMenu.component', './dashboard/dashlet/currentTime.component', './dashboard/mainDashboard.component', './dashboard/tempDashboard.component', './dashboard/cameraDashboard.component', './service/hemiService.service', './dashboard/dashlet/systemStatusDashlet.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, appMenu_component_1, currentTime_component_1, mainDashboard_component_1, tempDashboard_component_1, cameraDashboard_component_1, hemiService_service_1, systemStatusDashlet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (appMenu_component_1_1) {
                appMenu_component_1 = appMenu_component_1_1;
            },
            function (currentTime_component_1_1) {
                currentTime_component_1 = currentTime_component_1_1;
            },
            function (mainDashboard_component_1_1) {
                mainDashboard_component_1 = mainDashboard_component_1_1;
            },
            function (tempDashboard_component_1_1) {
                tempDashboard_component_1 = tempDashboard_component_1_1;
            },
            function (cameraDashboard_component_1_1) {
                cameraDashboard_component_1 = cameraDashboard_component_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (systemStatusDashlet_component_1_1) {
                systemStatusDashlet_component_1 = systemStatusDashlet_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _hemiService) {
                    this._router = _router;
                    this._hemiService = _hemiService;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './tpl/app.component.html',
                        //   template: `<h1>HEMI</h1>
                        // <nav>
                        // {{_router}}
                        //   <a [routerLink]="['MainDashboard']">Main Dashboard</a>
                        //   <a [routerLink]="['CameraDashboard', { cameraRoute: camera.route }]" *ngFor="#camera of _hemiService.cameras">Camera Dashboard - {{camera.name}}</a>
                        // </nav>
                        // <router-outlet></router-outlet>`,
                        directives: [currentTime_component_1.CurrentTime, appMenu_component_1.AppMenu, systemStatusDashlet_component_1.SystemStatusDashlet, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainDashboard', component: mainDashboard_component_1.MainDashboard, useAsDefault: true },
                        { path: '/teplota', name: 'TempDashboard', component: tempDashboard_component_1.TempDashboard },
                        { path: '/kamery', name: 'CameraDashboard', component: cameraDashboard_component_1.CameraDashboard },
                        { path: '/kamera/:cameraRoute', name: 'SingleCameraDashboard', component: cameraDashboard_component_1.CameraDashboard }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, hemiService_service_1.HemiService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map