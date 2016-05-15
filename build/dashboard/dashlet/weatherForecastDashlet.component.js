System.register(['angular2/core', '../../service/hemiService.service', '../../util/temp.pipe', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, hemiService_service_1, temp_pipe_1, http_1;
    var WeatherForecastDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hemiService_service_1_1) {
                hemiService_service_1 = hemiService_service_1_1;
            },
            function (temp_pipe_1_1) {
                temp_pipe_1 = temp_pipe_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            WeatherForecastDashlet = (function () {
                function WeatherForecastDashlet(el, _hemiService, http) {
                    this.el = el;
                    this._hemiService = _hemiService;
                    this.http = http;
                    this.API_KEY = '7040af11ef98d962f35f954eba225570';
                }
                WeatherForecastDashlet.prototype.getApiUrl = function () {
                    return 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.city + '&mode=json&units=metric&cnt=3&APPID=' + this.API_KEY;
                };
                WeatherForecastDashlet.prototype.resolveForecastDay = function (timestamp) {
                    var date = new Date(timestamp * 1000);
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return days[date.getDay()];
                };
                Object.defineProperty(WeatherForecastDashlet.prototype, "format", {
                    get: function () {
                        return '.1-1';
                    },
                    enumerable: true,
                    configurable: true
                });
                WeatherForecastDashlet.prototype.ngOnInit = function () {
                };
                WeatherForecastDashlet.prototype.ngOnDestroy = function () {
                };
                WeatherForecastDashlet.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.http.get(this.getApiUrl())
                        .catch(this._hemiService.handleHttpError)
                        .subscribe(function (res) {
                        if (res == null) {
                            return;
                        }
                        var response = res.json();
                        _this.forecast = response.list;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], WeatherForecastDashlet.prototype, "city", void 0);
                WeatherForecastDashlet = __decorate([
                    core_1.Component({
                        selector: 'weather-forecast-dashlet',
                        templateUrl: '../../tpl/dashboard/dashlet/weatherForecastDashlet.component.html',
                        styleUrls: ['../../dist/css/dashboard/dashlet/weatherForecastDashlet.css'],
                        pipes: [temp_pipe_1.TempPipe]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, hemiService_service_1.HemiService, http_1.Http])
                ], WeatherForecastDashlet);
                return WeatherForecastDashlet;
            }());
            exports_1("WeatherForecastDashlet", WeatherForecastDashlet);
        }
    }
});
//# sourceMappingURL=WeatherForecastDashlet.component.js.map