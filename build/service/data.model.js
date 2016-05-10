System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataModel, SystemStatusEnum, SensorDataModel, SensorTypeEnum, SensorValueDataModel;
    return {
        setters:[],
        execute: function() {
            DataModel = (function () {
                function DataModel() {
                }
                return DataModel;
            }());
            exports_1("DataModel", DataModel);
            (function (SystemStatusEnum) {
                SystemStatusEnum[SystemStatusEnum["READY"] = 0] = "READY";
                SystemStatusEnum[SystemStatusEnum["ARMED"] = 1] = "ARMED";
                SystemStatusEnum[SystemStatusEnum["UNKNOWN"] = 2] = "UNKNOWN";
            })(SystemStatusEnum || (SystemStatusEnum = {}));
            exports_1("SystemStatusEnum", SystemStatusEnum);
            SensorDataModel = (function () {
                function SensorDataModel() {
                }
                return SensorDataModel;
            }());
            exports_1("SensorDataModel", SensorDataModel);
            (function (SensorTypeEnum) {
                SensorTypeEnum[SensorTypeEnum["TEMP"] = 0] = "TEMP";
                SensorTypeEnum[SensorTypeEnum["HUMIDITY"] = 1] = "HUMIDITY";
                SensorTypeEnum[SensorTypeEnum["PIR"] = 2] = "PIR";
                SensorTypeEnum[SensorTypeEnum["MAGNETIC"] = 3] = "MAGNETIC";
                SensorTypeEnum[SensorTypeEnum["UNKNOWN"] = 4] = "UNKNOWN";
            })(SensorTypeEnum || (SensorTypeEnum = {}));
            exports_1("SensorTypeEnum", SensorTypeEnum);
            SensorValueDataModel = (function () {
                function SensorValueDataModel() {
                }
                return SensorValueDataModel;
            }());
            exports_1("SensorValueDataModel", SensorValueDataModel);
        }
    }
});
//# sourceMappingURL=data.model.js.map