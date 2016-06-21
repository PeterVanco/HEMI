System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Camera;
    return {
        setters:[],
        execute: function() {
            Camera = (function () {
                function Camera(_id, _name, _url, _route) {
                    this._id = _id;
                    this._name = _name;
                    this._url = _url;
                    this._route = _route;
                }
                Object.defineProperty(Camera.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "url", {
                    get: function () {
                        return this._url;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "route", {
                    get: function () {
                        return this._route;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Camera;
            }());
            exports_1("Camera", Camera);
        }
    }
});
//# sourceMappingURL=camera.js.map