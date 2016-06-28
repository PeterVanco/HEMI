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
    var CameraSnapshotCarouselDashlet;
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
            CameraSnapshotCarouselDashlet = (function (_super) {
                __extends(CameraSnapshotCarouselDashlet, _super);
                function CameraSnapshotCarouselDashlet(_el, _hemiService) {
                    _super.call(this, _hemiService);
                    this._el = _el;
                    this._hemiService = _hemiService;
                }
                CameraSnapshotCarouselDashlet.prototype.extractData = function (model) {
                    return model.cameras;
                };
                CameraSnapshotCarouselDashlet.prototype.handleData = function (data) {
                    var _this = this;
                    if (!this.cameras) {
                        this.cameras = data;
                    }
                    else if (data) {
                        data.forEach(function (camera) {
                            var cameraImage = $(_this._el.nativeElement).find('.camera-' + camera.route);
                            if (cameraImage) {
                                cameraImage.attr("src", camera.latestSnapshot.uri);
                            }
                        });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CameraSnapshotCarouselDashlet.prototype, "carouselId", void 0);
                CameraSnapshotCarouselDashlet = __decorate([
                    core_1.Component({
                        selector: 'camera-snapshot-carousel-dashlet',
                        templateUrl: '../../tpl/dashboard/dashlet/cameraSnapshotCarouselDashlet.component.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService])
                ], CameraSnapshotCarouselDashlet);
                return CameraSnapshotCarouselDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("CameraSnapshotCarouselDashlet", CameraSnapshotCarouselDashlet);
        }
    }
});
//# sourceMappingURL=cameraSnapshotCarouselDashlet.component.js.map