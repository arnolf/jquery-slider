define(['jquery-slider'], function (jQuery) {

        var directives = {};
    
        directives.slider = function($compile, $parse) {
            return {
                link: function (scope, element, attrs) {
                    jQuery(element).slider();
                    scope.$watch(attrs.slider, function (value) {
                        jQuery(element).slide($compile(value)(scope), attrs.direction, parseInt(attrs.duration));
                    });
                }
            };
        }

        return directives;
});