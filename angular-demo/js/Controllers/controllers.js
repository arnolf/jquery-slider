define([], function () {

    var controllers = {};

    controllers.index = function ($scope) {
        var index = 0;
        var contents = ["<img execute='slide()' timeout='3000' src='img1.jpg' height='100%' width='100%'/>", "<img execute='slide()' timeout='3000' src='img2.jpg' height='100%' width='100%'/>", "<video videoend='slide()' width='100%' height='100%' autoplay='true'><source src='video.mp4' type='video/mp4' /></video>", "<div execute='slide()' timeout='2000' style='height:100%;background-color:#FFFF99;'>Hello {{name}} !</div>"];
        $scope.options = { 'vertical-overflow-hidden' : true };
        $scope.name = 'World !';
        $scope.content = contents[index];
        $scope.slide = function () {
            index++
            if (index >= contents.length) index = 0;
            $scope.content = contents[index];
        };

    }

    return controllers;

});