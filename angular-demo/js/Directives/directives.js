define(['jquery-slider'], function (jQuery) {

        var directives = {};

        directives.slider = function ($compile, $parse) {
            return {
                link: function (scope, element, attrs) {
                    jQuery(element).slider($parse(attrs.options)(scope));
                    scope.$watch(attrs.slider, function (value) {
                        jQuery(element).slide($compile(value)(scope), attrs.direction, parseInt(attrs.duration));
                    });
                }
            };
        }

        directives.execute = function ($timeout, $parse) {
            return {
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        $parse(attrs.execute)(scope);
                    }, parseInt(attrs.timeout));
                }
            };
        };
    
        directives.videoend = function ($parse) {
            return {
                link: function (scope, element, attrs) {
                    element.on('ended', function () {
                        $parse(attrs.videoend)(scope);
                        scope.$apply();
                    });
                }
            };
        };

        return directives;
});