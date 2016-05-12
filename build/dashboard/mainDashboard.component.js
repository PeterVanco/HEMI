System.register(['angular2/core', 'angular2/http', './abstractDashboard.component', './dashlet/infoDashlet.component', './dashlet/cameraDashlet.component', './dashlet/highChartDashlet.component', './dashlet/chartDashletRangeSelector.component'], function(exports_1, context_1) {
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
    var core_1, http_1, abstractDashboard_component_1, infoDashlet_component_1, cameraDashlet_component_1, highChartDashlet_component_1, chartDashletRangeSelector_component_1;
    var MainDashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (abstractDashboard_component_1_1) {
                abstractDashboard_component_1 = abstractDashboard_component_1_1;
            },
            function (infoDashlet_component_1_1) {
                infoDashlet_component_1 = infoDashlet_component_1_1;
            },
            function (cameraDashlet_component_1_1) {
                cameraDashlet_component_1 = cameraDashlet_component_1_1;
            },
            function (highChartDashlet_component_1_1) {
                highChartDashlet_component_1 = highChartDashlet_component_1_1;
            },
            function (chartDashletRangeSelector_component_1_1) {
                chartDashletRangeSelector_component_1 = chartDashletRangeSelector_component_1_1;
            }],
        execute: function() {
            MainDashboard = (function (_super) {
                __extends(MainDashboard, _super);
                function MainDashboard(http) {
                    _super.call(this);
                    this.http = http;
                }
                MainDashboard.prototype.ngAfterViewInit = function () {
                    $(window).resize(function (e) {
                        $('#weather-radar').height($('#carousel-cameras').height());
                    });
                };
                MainDashboard.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                MainDashboard.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                __decorate([
                    core_1.ViewChild('temperatureChart'), 
                    __metadata('design:type', highChartDashlet_component_1.ChartDashlet)
                ], MainDashboard.prototype, "temperatureChart", void 0);
                MainDashboard = __decorate([
                    core_1.Component({
                        selector: 'main-dashboard',
                        templateUrl: '../tpl/dashboard/mainDashboard.component.html',
                        directives: [highChartDashlet_component_1.ChartDashlet, infoDashlet_component_1.InfoDashlet, cameraDashlet_component_1.CameraDashlet, chartDashletRangeSelector_component_1.ChartDashletRangeSelector]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MainDashboard);
                return MainDashboard;
            }(abstractDashboard_component_1.AbstractDashboard));
            exports_1("MainDashboard", MainDashboard);
        }
    }
});
//# sourceMappingURL=mainDashboard.component.js.map