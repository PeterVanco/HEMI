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
                    console.warn("I was called anyway!");
                    window.pauseCarousels = function () { return $('.carousel').carousel('pause'); };
                    $('.carousel').carousel();
                };
                AbstractDashboard.prototype.getDashboardName = function () {
                    return this.constructor.name;
                };
                AbstractDashboard.equalizeDashletHeights = function (element1, element2, resizeCallback) {
                    console.error("Setting height equalizer for " + element2);
                    var equalize = function () {
                        if (element1.height() != element2.height()) {
                            console.error("Equalizing height of " + element2 + " to " + element1.height());
                            element2.height(element1.height());
                            if (resizeCallback) {
                                resizeCallback();
                            }
                        }
                    };
                    equalize();
                    new ResizeSensor(element1, equalize);
                    // $(window).resize(equalize);
                    // setInterval(equalize, 1000);
                };
                return AbstractDashboard;
            }());
            exports_1("AbstractDashboard", AbstractDashboard);
        }
    }
});
//# sourceMappingURL=abstractDashboard.component.js.map