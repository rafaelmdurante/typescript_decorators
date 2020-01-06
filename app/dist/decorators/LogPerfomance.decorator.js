System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogPerformance() {
        return function (target, propertyKey, descriptor) {
            const source = descriptor.value;
            descriptor.value = function (...args) {
                const timeInit = performance.now();
                const executedMethod = source.apply(this, args);
                const timeEnd = performance.now();
                console.log(`Performance time: ${timeEnd - timeInit} ms | method: ${propertyKey}`);
                return executedMethod;
            };
            return descriptor;
        };
    }
    exports_1("LogPerformance", LogPerformance);
    return {
        setters: [],
        execute: function () {
        }
    };
});
