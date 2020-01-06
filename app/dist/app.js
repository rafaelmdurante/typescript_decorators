System.register(["./services/Some.service"], function (exports_1, context_1) {
    "use strict";
    var Some_service_1, service, button;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Some_service_1_1) {
                Some_service_1 = Some_service_1_1;
            }
        ],
        execute: function () {
            service = new Some_service_1.SomeService();
            button = document.getElementById('button');
            button.addEventListener("click", () => {
                console.log('button was clicked');
                service.doSomething();
            });
        }
    };
});
