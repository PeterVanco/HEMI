System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', '../camera'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1, camera_1;
    var HemiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (camera_1_1) {
                camera_1 = camera_1_1;
            }],
        execute: function() {
            HemiService = (function () {
                function HemiService(http) {
                    var _this = this;
                    this.http = http;
                    this._cameras = [];
                    this._dataProvider = new Rx_1.BehaviorSubject(null);
                    this._cameras.push(new camera_1.Camera(1, "Zahrada", "snapUrl", "zahrada"), new camera_1.Camera(2, "Predzahrada", "snapUrl", "predzahrada"), new camera_1.Camera(3, "Vstupna hala", "snapUrl", "vstupna-hala"));
                    console.log("Setting up info update interval");
                    this._infoProvider = Rx_1.Observable
                        .timer(1, 5000)
                        .switchMap(function () {
                        console.log("Getting info update");
                        return _this.getInfo();
                    }).share();
                    this._infoProvider.subscribe(function (data) {
                    }, function (error) {
                        console.error(error);
                    });
                }
                HemiService.prototype.getSnapshot = function (camId) {
                    return this.http.get("http://www.petervanco.sk/hemi/interface/?getSnapshot&camId=" + camId)
                        .map(function (res) {
                        return res.text();
                    });
                };
                HemiService.prototype.getInfo = function () {
                    var _this = this;
                    return this.http.get("http://www.petervanco.sk/hemi/interface/?getInfo&t=" + this.getRequestTimestamp())
                        .map(function (res) {
                        var response = res.json();
                        _this._dataProvider.next(response);
                        return response;
                    }).catch(this.handleHttpError);
                };
                HemiService.prototype.handleHttpError = function (error) {
                    console.error("Server error");
                    var errMsg = error.message;
                    console.error(errMsg);
                    return Rx_1.Observable.throw(errMsg);
                };
                HemiService.prototype.getRequestTimestamp = function () {
                    return new Date().getTime();
                    // return Math.floor(new Date().getTime() / 1000);
                    // return this._dataProvider.getValue() ? Math.floor(new Date().getTime() / 1000) : 0;
                };
                HemiService.prototype.getObservableData = function (callback) {
                    return this._dataProvider.asObservable().subscribe(function (data) {
                        if (data != null) {
                            callback(data);
                        }
                    }, function (error) {
                        console.error(error);
                    });
                };
                Object.defineProperty(HemiService.prototype, "cameras", {
                    get: function () {
                        return this._cameras;
                    },
                    enumerable: true,
                    configurable: true
                });
                HemiService.prototype.getCameraByRoute = function (route) {
                    return this._cameras.filter(function (camera) { return camera.route == route; })[0];
                };
                HemiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HemiService);
                return HemiService;
            }());
            exports_1("HemiService", HemiService);
        }
    }
});
//# sourceMappingURL=hemiService.service.js.map