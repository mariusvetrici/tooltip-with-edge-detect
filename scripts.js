/**
 * author: Marius Vetrici
 * website: www.vetrici.com
 * date: 02/02/15
 */
$(document).ready(function() {
    $('.hint').hover(function(mouseEvent){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');

        var tooltip = $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body');

        setTooltipPosition(tooltip, mouseEvent);

        tooltip.fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(mouseEvent) {
        var tooltip = $('.tooltip');
        setTooltipPosition(tooltip, mouseEvent);
    });
});

function setTooltipPosition(tooltip, mouseEvent) {
    var deltaX = 20;
    var deltaY = 10;
    var mouseX = mouseEvent.pageX;
    var mouseY = mouseEvent.pageY;

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if (mouseX - $(window).scrollLeft() + tooltip.outerWidth() + deltaX > windowWidth){
        mouseX -= tooltip.outerWidth() + deltaX;
    }
    else {
        mouseX += deltaX;
    }

    if (mouseY - $(window).scrollTop() + tooltip.outerHeight() + deltaY > windowHeight){
        mouseY -= tooltip.outerHeight() + deltaY;
    }
    else {
        mouseY += deltaY;
    }

    tooltip.css({ top: mouseY, left: mouseX});
}