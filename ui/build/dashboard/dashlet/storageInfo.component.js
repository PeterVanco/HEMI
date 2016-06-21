System.register(['angular2/core', '../../service/hemiService.service', '../../service/data.model', './abstractDashlet.component'], function(exports_1, context_1) {
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
    var core_1, hemiService_service_1, data_model_1, abstractDashlet_component_1;
    var InfoDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (data_model_1_1) {
                data_model_1 = data_model_1_1;
            },
            function (abstractDashlet_component_1_1) {
                abstractDashlet_component_1 = abstractDashlet_component_1_1;
            }],
        execute: function() {
            InfoDashlet = (function (_super) {
                __extends(InfoDashlet, _super);
                function InfoDashlet(_hemiService) {
                    _super.call(this, _hemiService);
                    this._hemiService = _hemiService;
                }
                InfoDashlet.prototype.extractData = function (model) {
                    var _this = this;
                    return model.sensors.filter(function (di) { return di.id == _this.dashletId && di.type.toString() == data_model_1.SensorTypeEnum[_this.dashletType]; })[0];
                };
                InfoDashlet.prototype.handleData = function (data) {
                    this.sensorData = data;
                };
                InfoDashlet.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                InfoDashlet.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InfoDashlet.prototype, "dashletId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InfoDashlet.prototype, "dashletType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InfoDashlet.prototype, "dashletIconClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InfoDashlet.prototype, "dashletIconColor", void 0);
                InfoDashlet = __decorate([
                    core_1.Component({
                        selector: 'storage-info-dashlet',
                        templateUrl: '../../tpl/dashboard/dashlet/infoDashlet.component.html'
                    }), 
                    __metadata('design:paramtypes', [hemiService_service_1.HemiService])
                ], InfoDashlet);
                return InfoDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("InfoDashlet", InfoDashlet);
        }
    }
});
//# sourceMappingURL=storageInfo.component.js.map