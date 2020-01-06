System.register([], function (exports_1, context_1) {
    "use strict";
    var SomeService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SomeService = class SomeService {
                doSomething() {
                    console.log('A request was sent to the server');
                }
            };
            exports_1("SomeService", SomeService);
        }
    };
});
