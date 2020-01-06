System.register(["../decorators/Throttle.decorator"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Throttle_decorator_1, SomeService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Throttle_decorator_1_1) {
                Throttle_decorator_1 = Throttle_decorator_1_1;
            }
        ],
        execute: function () {
            SomeService = class SomeService {
                doSomething() {
                    console.log('A request was sent to the server');
                }
            };
            __decorate([
                Throttle_decorator_1.Throttle()
            ], SomeService.prototype, "doSomething", null);
            exports_1("SomeService", SomeService);
        }
    };
});
