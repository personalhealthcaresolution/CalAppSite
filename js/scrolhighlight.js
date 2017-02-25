$(document).ready(function () {
    var $window = $(window),
        $itemElement = $('.tile');

    $window.on('scroll resize', scrollHighlightHandler);

    function scrollHighlightHandler() {
        var windowHeight = $window.height(),
            windowTop = $window.scrollTop(),
            windowMid = windowTop + (windowHeight / 2),
            closestDis = windowHeight,
            closestEl = 0;

        $.each($itemElement, function (index, element) {
            var element = $(element),
                elementHeight = element.outerHeight(),
                elementTop = element.offset().top,
                elementMid = elementTop + (elementHeight / 2),
                distance = Math.abs(elementMid - windowMid);

            if (distance < closestDis) {
                closestDis = distance;
                closestEl = index;
            }
        });

        clearTimeout($.data(this, 'scrollTimer'));

        $.data(this, 'scrollTimer', setTimeout(function() {
            $itemElement.removeClass('post-focus');
            $($itemElement[closestEl]).addClass('post-focus');
        }, 10));
    }
});