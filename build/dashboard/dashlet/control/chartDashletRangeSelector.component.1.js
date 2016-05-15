System.register(['angular2/core', '../chartDashlet.component'], function(exports_1, context_1) {
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
    var core_1, chartDashlet_component_1;
    var ChartDashletRangeSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chartDashlet_component_1_1) {
                chartDashlet_component_1 = chartDashlet_component_1_1;
            }],
        execute: function() {
            ChartDashletRangeSelector = (function () {
                function ChartDashletRangeSelector() {
                }
                ChartDashletRangeSelector.prototype.handleClick = function (period) {
                    if (this.chartDashlet != null) {
                        this.zoomChart(period);
                    }
                };
                ChartDashletRangeSelector.prototype.zoomChart = function (period) {
                    var tsTo = Math.round(new Date().getTime());
                    var tsFrom = tsTo - period;
                    this.chartDashlet.getPlot().xAxis[0].setExtremes(tsFrom, tsTo);
                    this.chartDashlet.getPlot().showResetZoom();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', chartDashlet_component_1.ChartDashlet)
                ], ChartDashletRangeSelector.prototype, "chartDashlet", void 0);
                ChartDashletRangeSelector = __decorate([
                    core_1.Component({
                        selector: 'chart-dashlet-range-selector',
                        template: "<div class=\"btn-group\" data-toggle=\"btn-toggle\">\n\t\t\t\t\t<button type=\"button\" (click)=\"handleClick(24 * 3600 * 1000)\" class=\"btn btn-default btn-sm active\" data-toggle=\"on\">24 hodin</button>\n\t\t\t\t\t<button type=\"button\" (click)=\"handleClick(3 * 24 * 3600 * 1000)\" class=\"btn btn-default btn-sm\" data-toggle=\"off\">3 dni</button>\n\t\t\t\t\t<button type=\"button\" (click)=\"handleClick(7 * 24 * 3600 * 1000)\" class=\"btn btn-default btn-sm\" data-toggle=\"off\">7 dni</button>\n\t\t\t   </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartDashletRangeSelector);
                return ChartDashletRangeSelector;
            }());
            exports_1("ChartDashletRangeSelector", ChartDashletRangeSelector);
        }
    }
});
//# sourceMappingURL=chartDashletRangeSelector.component.1.js.map