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
                    //data.length
                    for (var i = 0; i < 1; i++) {
                        var series = [];
                        console.log(data[i].values.length);
                        for (var j = 0; j < data[i].values.length; j++) {
                            series.push([data[i].values[j].x, data[i].values[j].y]);
                        }
                        console.log(series);
                        this.setData(series, i);
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
                        this.plot = $.plot(plotArea, this.dataset, this.options);
                        this.chosenInitialized = true;
                        var data = [];
                        for (var i = 0; i < 100; i++) {
                            data.push([i, Math.random() * 500]);
                        }
                        this.setData(data, 0);
                    }
                };
                ChartDashlet.prototype.setData = function (data, series) {
                    if (series == null) {
                        this.plot.setData(data);
                    }
                    else {
                        var plotData = this.plot.getData();
                        console.log(plotData);
                        if (!plotData || series >= plotData.length) {
                            console.error("Error setting data to chart");
                            return;
                        }
                        plotData[series].data = data;
                        this.plot.setData(plotData);
                    }
                    this.plot.draw();
                    //(this.plot as any).autoScale();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ChartDashlet.prototype, "options", void 0);
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
                        template: "{{data}}<div>Loading chart ...</div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService])
                ], ChartDashlet);
                return ChartDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("ChartDashlet", ChartDashlet);
        }
    }
});
//# sourceMappingURL=chartDashlet.component.js.map