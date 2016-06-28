System.register(['../../service/data.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var data_model_1;
    var AbstractDashlet;
    return {
        setters:[
            function (data_model_1_1) {
                data_model_1 = data_model_1_1;
            }],
        execute: function() {
            AbstractDashlet = (function () {
                function AbstractDashlet(_hemiService) {
                    this._hemiService = _hemiService;
                    this.sensorType = data_model_1.SensorTypeEnum;
                }
                AbstractDashlet.prototype.ngOnInit = function () {
                    this.registerObserver();
                };
                AbstractDashlet.prototype.registerObserver = function () {
                    var _this = this;
                    console.log(this.getDashletName() + ": Registering observer");
                    this.handler = this._hemiService.getObservableData(function (data) { return _this.processDataByDashletImplementation(data); });
                };
                AbstractDashlet.prototype.processDataByDashletImplementation = function (data) {
                    try {
                        var extractedData = this.extractData(data);
                        this.handleData(extractedData);
                    }
                    catch (ex) {
                        console.log(this.getDashletName() + ": Error while processing data: " + ex);
                    }
                };
                AbstractDashlet.prototype.triggerLastData = function () {
                    this.processDataByDashletImplementation(this._hemiService.getLastData());
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