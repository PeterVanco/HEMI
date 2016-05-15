System.register(['../service/data.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var data_model_1;
    var AbstractDashboard;
    return {
        setters:[
            function (data_model_1_1) {
                data_model_1 = data_model_1_1;
            }],
        execute: function() {
            AbstractDashboard = (function () {
                function AbstractDashboard() {
                    this.sensorType = data_model_1.SensorTypeEnum;
                }
                AbstractDashboard.prototype.ngAfterViewInit = function () {
                    window.pauseCarousels = function () { return $('.carousel').carousel('pause'); };
                    $('.carousel').carousel();
                };
                AbstractDashboard.prototype.ngOnInit = function () {
                };
                AbstractDashboard.prototype.ngOnDestroy = function () {
                };
                AbstractDashboard.prototype.getDashboardName = function () {
                    return this.constructor.name;
                };
                return AbstractDashboard;
            }());
            exports_1("AbstractDashboard", AbstractDashboard);
        }
    }
});
//# sourceMappingURL=abstractDashboard.component.js.map