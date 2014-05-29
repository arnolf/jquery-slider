define([], function () {

    var controllers = {};

    controllers.index = function ($scope, $compile, $interval) {
        var index = 0;
        var contents = ["<img src='img1.jpg' height='100%' width='100%'/>", "<img src='img2.jpg' height='100%' width='100%'/>", "<div style='height:100%;background-color:blue;'>Hello {{name}} !</div>"];
        $scope.options = { 'vertical-overflow-hidden' : true };
        $scope.name = 'World !';
        $scope.content = contents[index];
        $interval(function () {
            index++
            if (index >= contents.length) index = 0;
            $scope.content = contents[index];
        }, 3000);

    }

    return controllers;

});