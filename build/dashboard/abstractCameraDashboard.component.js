System.register(['angular2/core', './dashlet/cameraDashlet.component', './abstractDashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cameraDashlet_component_1, abstractDashboard_component_1;
    var AbstractCameraDashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cameraDashlet_component_1_1) {
                cameraDashlet_component_1 = cameraDashlet_component_1_1;
            },
            function (abstractDashboard_component_1_1) {
                abstractDashboard_component_1 = abstractDashboard_component_1_1;
            }],
        execute: function() {
            AbstractCameraDashboard = (function (_super) {
                __extends(AbstractCameraDashboard, _super);
                function AbstractCameraDashboard() {
                    _super.apply(this, arguments);
                }
                AbstractCameraDashboard.prototype.onTimelineChanged = function (snapshot) {
                    // console.log("Received event for:", snapshot);
                    this.cameras.forEach(function (camera) { return camera.loadSnapshot(snapshot); });
                };
                __decorate([
                    core_1.ViewChildren(cameraDashlet_component_1.CameraDashlet), 
                    __metadata('design:type', core_1.QueryList)
                ], AbstractCameraDashboard.prototype, "cameras", void 0);
                return AbstractCameraDashboard;
            }(abstractDashboard_component_1.AbstractDashboard));
            exports_1("AbstractCameraDashboard", AbstractCameraDashboard);
        }
    }
});
//# sourceMappingURL=AbstractCameraDashboard.component.js.map