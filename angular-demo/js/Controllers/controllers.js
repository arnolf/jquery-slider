define([], function () {

    var controllers = {};

    controllers.index = function ($scope, $compile, $interval) {
        var img1 = "<img src='img1.jpg'/>";
        var img2 = "<img src='img2.jpg'/>";
        $scope.content = img1;
        $interval(function() {
            if ($scope.content == img1) {
                $scope.content = img2;
            } else {
                $scope.content = img1;
            }
        }, 3000);
        
    }
    
    return controllers;

});