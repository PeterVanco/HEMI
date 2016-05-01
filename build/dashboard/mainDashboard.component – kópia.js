System.register(['angular2/core', './dashlet/infoDashlet.component', './dashlet/cameraDashlet.component'], function(exports_1, context_1) {
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
    var core_1, infoDashlet_component_1, cameraDashlet_component_1;
    var MainDashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (infoDashlet_component_1_1) {
                infoDashlet_component_1 = infoDashlet_component_1_1;
            },
            function (cameraDashlet_component_1_1) {
                cameraDashlet_component_1 = cameraDashlet_component_1_1;
            }],
        execute: function() {
            MainDashboard = (function () {
                function MainDashboard() {
                }
                MainDashboard = __decorate([
                    core_1.Component({
                        selector: 'main-dashboard',
                        templateUrl: '../tpl/dashboard/mainDashboard.component.html',
                        directives: [infoDashlet_component_1.InfoDashlet, cameraDashlet_component_1.CameraDashlet]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainDashboard);
                return MainDashboard;
            }());
            exports_1("MainDashboard", MainDashboard);
        }
    }
});
//# sourceMappingURL=mainDashboard.component – kópia.js.map