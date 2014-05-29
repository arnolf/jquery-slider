define([], function () {

    var controllers = {};

    controllers.index = function ($scope, $compile, $interval) {
        var index = 0;
        var contents = ["<img src='img1.jpg'/>", "<img src='img2.jpg'/>", "<div style='height:100%;background-color:blue;'>Hello {{name}} !</div>"];
        $scope.name = 'World !';
        $scope.content = contents[index];
        $interval(function() {
           index++
           if (index >= contents.length) index = 0;
            $scope.content = contents[index];
        }, 3000);
        
    }
    
    return controllers;

});