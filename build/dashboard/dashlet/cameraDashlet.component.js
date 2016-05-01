System.register(['angular2/core', 'rxjs/Rx', '../../service/hemiService.service', '../../camera'], function(exports_1, context_1) {
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
    var core_1, Rx_1, hemiService_service_1, camera_1;
    var CameraDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (camera_1_1) {
                camera_1 = camera_1_1;
            }],
        execute: function() {
            CameraDashlet = (function () {
                function CameraDashlet(_hemiService) {
                    this._hemiService = _hemiService;
                }
                CameraDashlet.prototype.getSnapshot = function () {
                    var _this = this;
                    return this._hemiService.getSnapshot(this.camera.id).toPromise().then(function (resp) {
                        _this.latestSnapshotUrl = resp;
                    });
                };
                CameraDashlet.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("Setting up camera " + this.camera.id + " interval");
                    this.getSnapshot();
                    var snapshotUrlProvider = Rx_1.Observable
                        .interval(5000)
                        .share()
                        .flatMap(function () {
                        console.log("Getting snapshot for camera " + _this.camera.id);
                        return _this._hemiService.getSnapshot(_this.camera.id);
                    });
                    this.handler = snapshotUrlProvider.subscribe(function (resp) {
                        _this.latestSnapshotUrl = resp;
                    });
                };
                CameraDashlet.prototype.ngOnDestroy = function () {
                    this.handler.unsubscribe();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', camera_1.Camera)
                ], CameraDashlet.prototype, "camera", void 0);
                CameraDashlet = __decorate([
                    core_1.Component({
                        selector: 'camera-dashlet',
                        template: "This is camera {{camId}} image <img src=\"{{latestSnapshotUrl}}\" />"
                    }), 
                    __metadata('design:paramtypes', [hemiService_service_1.HemiService])
                ], CameraDashlet);
                return CameraDashlet;
            }());
            exports_1("CameraDashlet", CameraDashlet);
        }
    }
});
//# sourceMappingURL=cameraDashlet.component.js.map