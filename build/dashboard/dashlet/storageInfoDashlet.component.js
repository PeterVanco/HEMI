System.register(['angular2/core', '../../service/hemiService.service', '../abstractDashboard.component', './abstractChartDashlet.component', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, hemiService_service_1, abstractDashboard_component_1, abstractChartDashlet_component_1, http_1;
    var StorageInfoDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (abstractDashboard_component_1_1) {
                abstractDashboard_component_1 = abstractDashboard_component_1_1;
            },
            function (abstractChartDashlet_component_1_1) {
                abstractChartDashlet_component_1 = abstractChartDashlet_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            StorageInfoDashlet = (function (_super) {
                __extends(StorageInfoDashlet, _super);
                function StorageInfoDashlet(el, _hemiService, http) {
                    _super.call(this, el, _hemiService, http);
                    this.el = el;
                    this._hemiService = _hemiService;
                    this.http = http;
                }
                StorageInfoDashlet.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    _super.prototype.ngAfterViewInit.call(this);
                    abstractDashboard_component_1.AbstractDashboard.equalizeDashletHeights($('#camera-box').find(".box-body"), $(this.el.nativeElement).find(".box-body"), function () {
                        if (_this.plot) {
                            _this.plot.reflow();
                        }
                    });
                };
                StorageInfoDashlet.prototype.extractData = function (model) {
                    console.info("Got model data", model);
                    return model.storageInfo;
                };
                StorageInfoDashlet.prototype.handleData = function (data) {
                    var plotData = [{
                            name: 'Použité miesto',
                            y: data.totalBytes - data.freeBytes
                        }, {
                            name: 'Voľné miesto',
                            y: data.freeBytes
                        }];
                    console.warn("Rendering ...");
                    this.plot.series[0].setData(plotData);
                    this.plot.reflow();
                };
                StorageInfoDashlet = __decorate([
                    core_1.Component({
                        selector: 'storage-info-dashlet',
                        templateUrl: '../../tpl/dashboard/dashlet/storageInfoDashlet.component.html',
                        styles: ["\n\t.box-body {\n\t\twidth: 100%;\n\t}\n\t.chart {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService, http_1.Http])
                ], StorageInfoDashlet);
                return StorageInfoDashlet;
            }(abstractChartDashlet_component_1.AbstractChartDashlet));
            exports_1("StorageInfoDashlet", StorageInfoDashlet);
        }
    }
});
//# sourceMappingURL=storageInfoDashlet.component.js.map