System.register(['angular2/core', '../../service/hemiService.service', './abstractDashlet.component'], function(exports_1, context_1) {
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
    var core_1, hemiService_service_1, abstractDashlet_component_1;
    var ChartDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (abstractDashlet_component_1_1) {
                abstractDashlet_component_1 = abstractDashlet_component_1_1;
            }],
        execute: function() {
            ChartDashlet = (function (_super) {
                __extends(ChartDashlet, _super);
                function ChartDashlet(el, _hemiService) {
                    _super.call(this, _hemiService);
                    this.el = el;
                    this._hemiService = _hemiService;
                    this.chosenInitialized = false;
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
                ChartDashlet.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                ChartDashlet.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                ChartDashlet.prototype.ngAfterViewInit = function () {
                    if (!this.chosenInitialized) {
                        var plotArea = $(this.el.nativeElement).find('div').empty();
                        plotArea.css({
                            width: this.width,
                            height: this.height
                        });
                        this.chosenInitialized = true;
                    }
                };
                ChartDashlet.prototype.initialize = function (options) {
                    console.warn("Initializing chart");
                    console.warn(options);
                    this.plot = new Highcharts.Chart(options);
                    // let testSeries: HighchartsIndividualSeriesOptions = {};
                    // testSeries.name = "Test series";
                    // this.plot.addSeries<HighchartsIndividualSeriesOptions>(testSeries, true, true);
                    // let data = [];
                    // for (let i = 0; i < 100; i++) {
                    //     data.push([i, Math.random() * 500]);
                    // }
                    // this.setData(data, 0);
                };
                ChartDashlet.prototype.setData = function (data, series) {
                    if (typeof series === "string" && this.plot.series.filter(function (s) { return s.name == series; })[0] != null) {
                        this.plot.series.filter(function (s) { return s.name == series; })[0].setData(data, true, true, true);
                    }
                    else if (typeof series === "number" && series >= this.plot.series.length) {
                        this.plot.series[series].setData(data, true, true, true);
                    }
                    else {
                        console.error("Error setting data to chart");
                        return;
                    }
                };
                ChartDashlet.prototype.getPlot = function () {
                    return this.plot;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ChartDashlet.prototype, "dataset", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChartDashlet.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChartDashlet.prototype, "height", void 0);
                ChartDashlet = __decorate([
                    core_1.Component({
                        selector: 'chart-dashlet',
                        template: "{{data}}<div id=\"chart-container\">Loading chart ...</div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService])
                ], ChartDashlet);
                return ChartDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("ChartDashlet", ChartDashlet);
        }
    }
});
//# sourceMappingURL=highChartDashlet.component.js.map