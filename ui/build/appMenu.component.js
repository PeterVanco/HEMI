System.register(['angular2/core', 'angular2/router', './dashboard/dashlet/menuInfoDashlet.component', './service/data.model', './service/hemiService.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menuInfoDashlet_component_1, data_model_1, hemiService_service_1;
    var AppMenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menuInfoDashlet_component_1_1) {
                menuInfoDashlet_component_1 = menuInfoDashlet_component_1_1;
            },
            function (data_model_1_1) {
                data_model_1 = data_model_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            }],
        execute: function() {
            AppMenu = (function () {
                function AppMenu(_hemiService) {
                    this._hemiService = _hemiService;
                    this.sensorType = data_model_1.SensorTypeEnum;
                }
                AppMenu.prototype.ngOnInit = function () {
                    var _this = this;
                    this.handler = this._hemiService.getObservableData(function (model) {
                        try {
                            _this.cameras = model.cameras;
                            _this.handler.unsubscribe();
                        }
                        catch (ex) {
                            console.error("Could not extract cameras for menu");
                        }
                    });
                };
                AppMenu.prototype.isRouterLinkActive = function (params) {
                    return this._router.isRouteActive(this._router.generate(params));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', router_1.Router)
                ], AppMenu.prototype, "_router", void 0);
                AppMenu = __decorate([
                    core_1.Component({
                        selector: 'app-menu',
                        templateUrl: './tpl/appMenu.component.html',
                        directives: [menuInfoDashlet_component_1.MenuInfoDashlet, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [hemiService_service_1.HemiService])
                ], AppMenu);
                return AppMenu;
            }());
            exports_1("AppMenu", AppMenu);
        }
    }
});
//# sourceMappingURL=appMenu.component.js.map