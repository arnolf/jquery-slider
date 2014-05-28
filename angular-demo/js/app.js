define(['angular', 'Controllers/controllers', 'Directives/directives'], function (angular, controllers, directives) {
    var initialize = function () {
        var app = angular.module('demo', []);
        app.controller(controllers);
        app.directive(directives);
        angular.bootstrap(document, ['demo'])
    }

    return {
        initialize: initialize
    };
});