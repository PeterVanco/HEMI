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
    var CarouselItemSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarouselItemSelector = (function () {
                function CarouselItemSelector() {
                    this.activeSlide = 0;
                }
                CarouselItemSelector.prototype.getCarousel = function () {
                    return $('#' + this.carouselId);
                };
                CarouselItemSelector.prototype.handleClick = function () {
                    var _this = this;
                    this.getCarousel().carousel('pause');
                    setTimeout(function () { return $(window).trigger('resize'); }, 3000);
                    setTimeout(function () { return _this.getCarousel().carousel('cycle'); }, 15000);
                };
                CarouselItemSelector.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.getCarousel().on('slid.bs.carousel', function (e) {
                        _this.activeSlide = $('.active', e.target).index();
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CarouselItemSelector.prototype, "carouselId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], CarouselItemSelector.prototype, "items", void 0);
                CarouselItemSelector = __decorate([
                    core_1.Component({
                        selector: 'carousel-item-selector',
                        template: "<div class=\"btn-group\" data-toggle=\"btn-toggle\">\n\t\t\t\t\t<button *ngFor=\"#item of items; #idx = index\" (click)=\"handleClick()\" attr.data-target=\"#{{carouselId}}\" [ngClass]=\"{active: activeSlide == idx}\" attr.data-slide-to=\"{{idx}}\" class=\"btn btn-default btn-sm\">{{item}}</button>\n\t\t\t   </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselItemSelector);
                return CarouselItemSelector;
            }());
            exports_1("CarouselItemSelector", CarouselItemSelector);
        }
    }
});
//# sourceMappingURL=carouselItemSelector.component.js.map