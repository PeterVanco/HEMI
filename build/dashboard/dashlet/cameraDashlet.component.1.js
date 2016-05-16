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
    var CameraDashlet;
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
            CameraDashlet = (function (_super) {
                __extends(CameraDashlet, _super);
                function CameraDashlet(_hemiService) {
                    _super.call(this, _hemiService);
                    this._hemiService = _hemiService;
                }
                CameraDashlet.prototype.extractData = function (model) {
                    var _this = this;
                    return model.cameras.filter(function (cam) { return cam.route == _this.cameraRoute; })[0];
                };
                CameraDashlet.prototype.handleData = function (data) {
                    this.camera = data;
                    console.log(this.camera.latestSnapshot.uri);
                };
                CameraDashlet.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                CameraDashlet.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CameraDashlet.prototype, "cameraRoute", void 0);
                CameraDashlet = __decorate([
                    core_1.Component({
                        selector: 'camera-dashlet',
                        template: "<img src=\"{{camera?.latestSnapshot.uri}}\" />",
                        styles: ["\n\timg {\n\t\twidth: 100%;\t\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [hemiService_service_1.HemiService])
                ], CameraDashlet);
                return CameraDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("CameraDashlet", CameraDashlet);
        }
    }
});
//# sourceMappingURL=cameraDashlet.component.1.js.map