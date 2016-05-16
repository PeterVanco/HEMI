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
    var IFrameDashlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IFrameDashlet = (function () {
                function IFrameDashlet() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], IFrameDashlet.prototype, "iframeSrc", void 0);
                IFrameDashlet = __decorate([
                    core_1.Component({
                        selector: 'iframe-dashlet',
                        template: '<iframe src="{{iframeSrc}}"></iframe>',
                        styles: ["\n\tiframe {\n\t\tborder: none;\n\t\tdisplay: block;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IFrameDashlet);
                return IFrameDashlet;
            }());
            exports_1("IFrameDashlet", IFrameDashlet);
        }
    }
});
//# sourceMappingURL=iframeDashlet.component.js.map