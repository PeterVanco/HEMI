System.register(['angular2/core', '../../service/hemiService.service', './abstractChartDashlet.component', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, hemiService_service_1, abstractChartDashlet_component_1, http_1;
    var ChartDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (abstractChartDashlet_component_1_1) {
                abstractChartDashlet_component_1 = abstractChartDashlet_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ChartDashlet = (function (_super) {
                __extends(ChartDashlet, _super);
                function ChartDashlet(el, _hemiService, http) {
                    _super.call(this, el, _hemiService, http);
                    this.el = el;
                    this._hemiService = _hemiService;
                    this.http = http;
                }
                ChartDashlet.prototype.extractData = function (model) {
                    return model.sensors;
                };
                ChartDashlet.prototype.handleData = function (data) {
                    if (!this.chosenInitialized) {
                        return;
                    }
                    var _loop_1 = function(i) {
                        var thisData = data[i];
                        var series = this_1.plot.series.filter(function (s) { return s.name == thisData.name; })[0];
                        if (series == null) {
                            console.debug("Creating new series: " + thisData.name);
                            var newSeries = {};
                            newSeries.name = thisData.name;
                            this_1.plot.addSeries(newSeries, true, true);
                            series = this_1.plot.series.filter(function (s) { return s.name == thisData.name; })[0];
                        }
                        var seriesData = [];
                        for (var j = 0; j < data[i].values.length; j++) {
                            seriesData.push([data[i].values[j].x, data[i].values[j].y]);
                        }
                        this_1.setData(seriesData, thisData.name);
                    };
                    var this_1 = this;
                    for (var i = 0; i < data.length; i++) {
                        _loop_1(i);
                    }
                };
                ChartDashlet = __decorate([
                    core_1.Component({
                        selector: 'chart-dashlet',
                        template: "<div class=\"chart\">Loading chart ...</div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService, http_1.Http])
                ], ChartDashlet);
                return ChartDashlet;
            }(abstractChartDashlet_component_1.AbstractChartDashlet));
            exports_1("ChartDashlet", ChartDashlet);
        }
    }
});
//# sourceMappingURL=chartDashlet.component.js.map