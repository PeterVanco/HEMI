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
    var SystemStatusDashlet;
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
            SystemStatusDashlet = (function (_super) {
                __extends(SystemStatusDashlet, _super);
                function SystemStatusDashlet(_hemiService) {
                    _super.call(this, _hemiService);
                    this._hemiService = _hemiService;
                    this.systemStatusMapper = [{ status: data_model_1.SystemStatusEnum.READY, resolvedStyle: "text-success" },
                        { status: data_model_1.SystemStatusEnum.ARMED, resolvedStyle: "text-error" },
                        { status: data_model_1.SystemStatusEnum.UNKNOWN, resolvedStyle: "text-warning" }];
                }
                SystemStatusDashlet.prototype.extractData = function (model) {
                    return model.systemStatus;
                };
                SystemStatusDashlet.prototype.handleData = function (data) {
                    this.systemStatus = this.systemStatusMapper.filter(function (ssm) { return data_model_1.SystemStatusEnum[ssm.status] == data.toString(); }).map(function (ssm) { return ssm.resolvedStyle; })[0];
                    console.log(this.systemStatus);
                };
                SystemStatusDashlet.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                SystemStatusDashlet.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                SystemStatusDashlet = __decorate([
                    core_1.Component({
                        selector: 'system-status-dashlet',
                        template: '<div class="pull-left status"><i class="fa fa-circle {{systemStatus}}"></i></div>'
                    }), 
                    __metadata('design:paramtypes', [hemiService_service_1.HemiService])
                ], SystemStatusDashlet);
                return SystemStatusDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("SystemStatusDashlet", SystemStatusDashlet);
        }
    }
});
//# sourceMappingURL=systemStatusDashlet.component.js.map