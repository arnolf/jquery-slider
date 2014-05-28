define([], function () {

    var controllers = {};

    controllers.index = function ($scope, $compile, $interval) {
        var img1 = "<img src='http://www.mrwallpaper.com/wallpapers/Sunset-over-Sea-1600x900.jpg'/>";
        var img2 = "<img src='http://www.hdartwallpaper.com/wp-content/uploads/2013/12/1600x900-hd-wallpapers-109.jpg'/>";
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