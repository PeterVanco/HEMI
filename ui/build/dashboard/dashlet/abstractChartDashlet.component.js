System.register(['angular2/core', './abstractDashlet.component', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, abstractDashlet_component_1, Rx_1;
    var AbstractChartDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abstractDashlet_component_1_1) {
                abstractDashlet_component_1 = abstractDashlet_component_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AbstractChartDashlet = (function (_super) {
                __extends(AbstractChartDashlet, _super);
                function AbstractChartDashlet(el, _hemiService, http) {
                    _super.call(this, _hemiService);
                    this.el = el;
                    this._hemiService = _hemiService;
                    this.http = http;
                    this.chosenInitialized = false;
                }
                AbstractChartDashlet.prototype.getPlotElement = function () {
                    return $(this.el.nativeElement).find('div.chart');
                };
                AbstractChartDashlet.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (!this.chosenInitialized) {
                        var plotArea = this.getPlotElement().empty();
                        plotArea.css({
                            width: this.width,
                            height: this.height
                        });
                        this.http.get(this.chartSettingsUri).catch(function (err) {
                            console.warn(err);
                            return Rx_1.Observable.throw(err);
                        }).subscribe(function (res) {
                            var evil = eval('(' + res.text() + ')');
                            _this.initialize(evil);
                            _this.chosenInitialized = true;
                            _super.prototype.triggerLastData.call(_this);
                        });
                    }
                };
                AbstractChartDashlet.prototype.initialize = function (options) {
                    console.info("Initializing chart with options:", this.chartSettingsUri, options);
                    this.getPlotElement().highcharts(options);
                    this.plot = this.getPlotElement().highcharts();
                    // let testSeries: HighchartsIndividualSeriesOptions = {};
                    // testSeries.name = "Test series";
                    // this.plot.addSeries<HighchartsIndividualSeriesOptions>(testSeries, true, true);
                    // let data = [];
                    // for (let i = 0; i < 100; i++) {
                    //     data.push([i, Math.random() * 500]);
                    // }
                    // this.setData(data, 0);
                };
                AbstractChartDashlet.prototype.setData = function (data, series) {
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
                AbstractChartDashlet.prototype.getPlot = function () {
                    return this.plot;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AbstractChartDashlet.prototype, "dataset", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AbstractChartDashlet.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AbstractChartDashlet.prototype, "height", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AbstractChartDashlet.prototype, "chartSettingsUri", void 0);
                return AbstractChartDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("AbstractChartDashlet", AbstractChartDashlet);
        }
    }
});
//# sourceMappingURL=abstractChartDashlet.component.js.map