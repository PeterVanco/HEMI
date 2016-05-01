System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ChartDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChartDashlet = (function () {
                function ChartDashlet(el) {
                    this.el = el;
                    this.chosenInitialized = false;
                }
                ChartDashlet.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (!this.chosenInitialized) {
                        var plotArea = $(this.el.nativeElement).find('div').empty();
                        plotArea.css({
                            width: this.width,
                            height: this.height
                        });
                        this.plot = $.plot(plotArea, this.dataset, this.options);
                        this.chosenInitialized = true;
                        setInterval(function () {
                            var data = [];
                            for (var i = 0; i < 100; i++) {
                                data.push([i, Math.random() * 500]);
                            }
                            _this.setData(data, 0);
                        }, 1000);
                    }
                };
                ChartDashlet.prototype.setData = function (data, series) {
                    if (series == null) {
                        this.plot.setData(data);
                    }
                    else {
                        var plotData = this.plot.getData();
                        plotData[series].data = data;
                        this.plot.setData(plotData);
                    }
                    this.plot.draw();
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
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ChartDashlet);
                return ChartDashlet;
            }());
            exports_1("ChartDashlet", ChartDashlet);
        }
    }
});
//# sourceMappingURL=chartDashlet.component.js.map