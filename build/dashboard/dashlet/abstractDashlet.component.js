System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AbstractDashlet;
    return {
        setters:[],
        execute: function() {
            AbstractDashlet = (function () {
                function AbstractDashlet(_hemiService) {
                    this._hemiService = _hemiService;
                }
                AbstractDashlet.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log(this.getDashletName() + ": Registering observer");
                    this.handler = this._hemiService.getInfoObservable().subscribe(function (model) {
                        console.log(_this.getDashletName() + ": New dashlet data received");
                        var data = _this.extractData(model);
                        _this.handleData(data);
                    });
                };
                AbstractDashlet.prototype.ngOnDestroy = function () {
                    this.handler.unsubscribe();
                };
                AbstractDashlet.prototype.getDashletName = function () {
                    return this.constructor.name;
                };
                return AbstractDashlet;
            }());
            exports_1("AbstractDashlet", AbstractDashlet);
        }
    }
});
//# sourceMappingURL=abstractDashlet.component.js.map