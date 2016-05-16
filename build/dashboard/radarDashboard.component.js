System.register(['angular2/core', './abstractDashboard.component', './dashlet/iframeDashlet.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, abstractDashboard_component_1, iframeDashlet_component_1;
    var RadarDashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abstractDashboard_component_1_1) {
                abstractDashboard_component_1 = abstractDashboard_component_1_1;
            },
            function (iframeDashlet_component_1_1) {
                iframeDashlet_component_1 = iframeDashlet_component_1_1;
            }],
        execute: function() {
            RadarDashboard = (function (_super) {
                __extends(RadarDashboard, _super);
                function RadarDashboard() {
                    _super.apply(this, arguments);
                }
                RadarDashboard.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                RadarDashboard.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                RadarDashboard = __decorate([
                    core_1.Component({
                        selector: 'camera-dashboard',
                        templateUrl: '../tpl/dashboard/radarDashboard.component.html',
                        directives: [iframeDashlet_component_1.IFrameDashlet]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadarDashboard);
                return RadarDashboard;
            }(abstractDashboard_component_1.AbstractDashboard));
            exports_1("RadarDashboard", RadarDashboard);
        }
    }
});
//# sourceMappingURL=radarDashboard.component.js.map