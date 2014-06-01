/*!
 * jquery-slider.js
 * v0.1.0 - 2014-20-05
 * (c) Arnaud Fayolle;  License MIT
 * Created by: Arnaud Fayolle, https://github.com/arnolf/jquery-slider
 * Uses jQuery.js
 */
(function ($) {

    $.fn.slider = function (options) {
        $(this).wrapInner("<div class='wrapper'><div></div></div>");
        var $wrapper = $(this).find('.wrapper:first');
        var $page = $wrapper.find('div:first');
        var width = parseInt($(this).css('width'));
        $page.css('width', width);
        $page.css('height', '100%');
        $page.css('position', 'absolute');
        $wrapper.css('width', '100%');
        $wrapper.css('height', '100%');
        $wrapper.css('position', 'absolute');
        $wrapper.css('top', '0px');
        $wrapper.css('left', '0px');
        if (options != undefined && options['vertical-overflow-hidden'] == true) {
            $wrapper.css('overflow', 'hidden');
        } else {
            $wrapper.css('overflow-x', 'hidden');
        }
    };

    $.fn.slide = function (content, direction, duration, callback) {
        var $wrapper = $(this).find('.wrapper:first');
        var $page = $wrapper.find('div:first');
        if ($page.children().length === 0) {
        	$page.hide().append(content).fadeIn(duration);
            if (callback != undefined) {
                callback();
            }
        } else {
            var width = parseInt(this.css('width'));
            $(this).on({
                'mousewheel': function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                },
                'keydown': function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            var $this = $(this);
            var $oldPage = $wrapper.find('div:first');
            var newPage = document.createElement('div');
            var $newPage = $(newPage);
            var scrollLeft;
            
            if (direction == 'left') {
                $wrapper.append(newPage);
                $newPage.addClass('item').html(content);
                $newPage.css('width', width);
                $newPage.css('height', '100%');
                $newPage.css('left', width);
                $newPage.css('top', $wrapper.scrollTop());
                $newPage.css('position', 'absolute');
                scrollLeft = width;
            }
            
            if (direction == 'right') {
            	$oldPage.css('left', width);
                $wrapper.scrollLeft(width);
                $wrapper.prepend(newPage);
                $newPage.addClass('item').html(content);
                $newPage.css('width', width);
                $newPage.css('height', '100%');
                $newPage.css('left', 0);
                $newPage.css('top', $wrapper.scrollTop());
                $newPage.css('position', 'absolute');
                scrollLeft = 0;
            }
            
            $wrapper.animate({
                scrollLeft: scrollLeft
            }, duration, function () {
                $oldPage.remove();
                $newPage.css('left', 0);
                $newPage.css('top', 0);
                $(this).scrollTop(0);
                $(this).scrollLeft(0);
                $this.off({
                    'mousewheel': undefined,
                    'keydown': undefined
                });
                if (callback != undefined) {
                    callback();
                }
            });
        }
    };

}(jQuery));