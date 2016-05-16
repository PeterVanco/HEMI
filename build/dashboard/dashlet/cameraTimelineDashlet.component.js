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
    var CameraTimelineDashlet;
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
            CameraTimelineDashlet = (function (_super) {
                __extends(CameraTimelineDashlet, _super);
                function CameraTimelineDashlet(_el, _hemiService) {
                    var _this = this;
                    _super.call(this, _hemiService);
                    this._el = _el;
                    this._hemiService = _hemiService;
                    _el.nativeElement.addEventListener('touchstart', function (e) {
                        if ($(e.target).is('a, iframe')) {
                            return true;
                        }
                        e.preventDefault();
                    });
                    _el.nativeElement.addEventListener('touchmove', function (e) {
                        e.preventDefault();
                    });
                    $(window).resize(function (e) { return _this.initTimeline(); });
                }
                CameraTimelineDashlet.prototype.initTimeline = function () {
                    $(this._el.nativeElement).empty();
                    $(this._el.nativeElement).timeCube({
                        data: this.buildData(),
                        granularity: "month",
                        startDate: new Date('May 1, 2011 10:20:00 pm GMT+0'),
                        endDate: new Date('September 30, 2011 02:20:00 am GMT+0'),
                        nextButton: $("#next-link"),
                        previousButton: $("#prev-link"),
                        showDate: false,
                        onTimelineChange: function (index) { return console.log(index); }
                    });
                };
                CameraTimelineDashlet.prototype.extractData = function (model) {
                    var _this = this;
                    return model.cameras.filter(function (cam) { return cam.route == _this.cameraRoute; })[0];
                };
                CameraTimelineDashlet.prototype.handleData = function (data) {
                    this.camera = data;
                    console.log(this.camera.latestSnapshot.uri);
                };
                CameraTimelineDashlet.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                CameraTimelineDashlet.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                };
                CameraTimelineDashlet.prototype.buildData = function () {
                    return [{
                            startDate: (new Date('May 10, 2011 10:29:00 pm GMT+0')),
                        },
                        {
                            startDate: (new Date('June 15, 2011 00:00:00 am GMT+0')),
                        },
                        {
                            startDate: (new Date('July 18, 2011 00:00:00 am GMT+0')),
                        },
                        {
                            startDate: (new Date('July 1, 2011 00:00:00 am GMT+0')),
                        },
                        {
                            startDate: (new Date('August 4, 2011 00:00:00 am GMT+0')),
                        },
                        {
                            startDate: (new Date('August 30, 2011 00:00:00 am GMT+0')),
                        }];
                };
                CameraTimelineDashlet.prototype.ngAfterViewInit = function () {
                    this.initTimeline();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CameraTimelineDashlet.prototype, "cameraRoute", void 0);
                CameraTimelineDashlet = __decorate([
                    core_1.Component({
                        host: {
                            styles: "timeCube"
                        },
                        selector: 'camera-timeline-dashlet',
                        template: ''
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService])
                ], CameraTimelineDashlet);
                return CameraTimelineDashlet;
            }(abstractDashlet_component_1.AbstractDashlet));
            exports_1("CameraTimelineDashlet", CameraTimelineDashlet);
        }
    }
});
//# sourceMappingURL=cameraTimelineDashlet.component.js.map