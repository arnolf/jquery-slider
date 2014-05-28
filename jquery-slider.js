/*!
 * jquery-slider.js
 * v0.1.0 - 2014-20-05
 * (c) Arnaud Fayolle;  License MIT
 * Created by: Arnaud Fayolle
 * Uses jQuery.js
 */
(function ($) {

    $.fn.slider = function () {
        $(this).wrapInner("<div class='wrapper'><div class='mask'><div class='item'></div></div></div>");
        var width = parseInt($(this).find('.wrapper:first').parent().css('width'));
        var $item = $(this).find('.item');
        $item.css('width', width);
        $item.css('height', '100%');
        $item.css('position', 'absolute');
        var $wrapper = $(this).find('.wrapper:first');
        $wrapper.css('width', '100%');
        $wrapper.css('height', '100%');
        $wrapper.css('position', 'absolute');
        $wrapper.css('top', '0px');
        $wrapper.css('left', '0px');
        $wrapper.css('overflow-x', 'hidden');
    };

    $.fn.slide = function (content, direction, duration, callback) {
        if ($(this).find('.item').children().length === 0) {
            $(this).find('.item').hide().append(content).fadeIn(duration);
            if (callback != undefined) {
                callback();
            }
        } else {
            var width = parseInt(this.css('width'));
            var $oldPage = $(this).find('.mask:first div');
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
            $this = $(this);
            if (direction == 'left') {
                var newPage = document.createElement('div');
                $(this).find('.mask:first').append(newPage);
                var $newPage = $(this).find('.mask:first div:last');
                $newPage.addClass('item').html(content);
                $newPage.css('width', width);
                $newPage.css('height', '100%');
                $newPage.css('left', width);
                $newPage.css('top', $(this).find('.wrapper:first').scrollTop());
                $newPage.css('position', 'absolute');

                $(this).find('.wrapper:first').animate({
                    scrollLeft: width
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
            if (direction == 'right') {
                $(this).find('.mask:first div:first').css('left', width);
                $(this).find('.wrapper:first').scrollLeft(width);

                var newPage = document.createElement('div');
                $(this).find('.mask:first').prepend(newPage);
                var $newPage = $(this).find('.mask:first div:first');
                $newPage.addClass('item').html(content);
                $newPage.css('width', width);
                $newPage.css('height', '100%');
                $newPage.css('left', 0);
                $newPage.css('top', $(this).find('.wrapper:first').scrollTop());
                $newPage.css('position', 'absolute');

                $(this).find('.wrapper:first').animate({
                    scrollLeft: 0
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
        }
    };

}(jQuery));