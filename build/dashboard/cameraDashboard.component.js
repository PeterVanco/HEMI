System.register(['angular2/core', './abstractDashboard.component', './dashlet/cameraDashlet.component'], function(exports_1, context_1) {
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
    var core_1, abstractDashboard_component_1, cameraDashlet_component_1;
    var CameraDashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abstractDashboard_component_1_1) {
                abstractDashboard_component_1 = abstractDashboard_component_1_1;
            },
            function (cameraDashlet_component_1_1) {
                cameraDashlet_component_1 = cameraDashlet_component_1_1;
            }],
        execute: function() {
            CameraDashboard = (function (_super) {
                __extends(CameraDashboard, _super);
                function CameraDashboard() {
                    _super.apply(this, arguments);
                }
                CameraDashboard.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                CameraDashboard.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                CameraDashboard = __decorate([
                    core_1.Component({
                        selector: 'camera-dashboard',
                        templateUrl: '../tpl/dashboard/cameraDashboard.component.html',
                        directives: [cameraDashlet_component_1.CameraDashlet],
                    }), 
                    __metadata('design:paramtypes', [])
                ], CameraDashboard);
                return CameraDashboard;
            }(abstractDashboard_component_1.AbstractDashboard));
            exports_1("CameraDashboard", CameraDashboard);
        }
    }
});
//# sourceMappingURL=cameraDashboard.component.js.map