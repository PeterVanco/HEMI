System.register(['angular2/core', 'angular2/router', './dashlet/cameraDashlet.component', '../service/hemiService.service'], function(exports_1, context_1) {
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
    var core_1, router_1, cameraDashlet_component_1, hemiService_service_1;
    var CameraDashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cameraDashlet_component_1_1) {
                cameraDashlet_component_1 = cameraDashlet_component_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            }],
        execute: function() {
            CameraDashboard = (function () {
                function CameraDashboard(_router, _routeParams, _hemiService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._hemiService = _hemiService;
                }
                CameraDashboard.prototype.ngOnInit = function () {
                    this.camera = this._hemiService.getCameraByRoute(this._routeParams.get('cameraRoute'));
                };
                CameraDashboard = __decorate([
                    core_1.Component({
                        selector: 'camera-dashboard',
                        template: "This is a camera {{ camera?.name }} dashboard\n\t\t\t\t<camera-dashlet *ngIf=\"camera\" [camera]=\"camera\"></camera-dashlet>\n    ",
                        directives: [cameraDashlet_component_1.CameraDashlet],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, hemiService_service_1.HemiService])
                ], CameraDashboard);
                return CameraDashboard;
            }());
            exports_1("CameraDashboard", CameraDashboard);
        }
    }
});
//# sourceMappingURL=cameraDashboard.component.js.map