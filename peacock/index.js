//a
$('a').attr('target', '_blank');

$('a').click(function() {
    if ( $(this).attr('href') == '#' ) {
        return false;
    }
});

//visible animation
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);
        
        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }
        
        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });
    
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.active)').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));
        
        if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
            setTimeout(function() {
                $node.addClass('active');
            }, delay);
        }
    });
}

ActiveOnVisible__init();

//page 1 - smooth scroll
$(document).ready(function() {
    $('body').smoothScroll();
});

//page 2 - scroll
function NotScrollTop0__init() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop < 900 ) {
        $('.page2 > .img-view-box > .page2-img').addClass('data-scroll-900');
    }
    else if ( scrollTop < 1100 ) {
        $('.page2 > .img-view-box > .page2-img').addClass('data-scroll-1100');
    }
}

$(window).scroll(NotScrollTop0__init);
NotScrollTop0__init();

//page3 - mouseenter
$('.page3 > .inner > ul > li').mouseenter(function() {
    $(this).addClass('selected');
    $(this).siblings('.selected').removeClass('selected');
});


//page 2 - brand story
var Box__$el = $('.img-view-box');
var Box__offsetTop;
var Box__windowHeight;

$(window).resize(function() {
    Box__offsetTop = Box__$el.offset().top;
    Box__windowHeight = $(window).height();
}).resize();

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var visibleHeight = 0;
    
    if ( scrollTop + Box__windowHeight > Box__offsetTop ) {
        visibleHeight = scrollTop + Box__windowHeight - Box__offsetTop;
        var top = parseInt(visibleHeight / 4) * -1;
        
        console.log('top : ' + top);
        
        var minTop = -167;
        
        if ( top < minTop ) {
            top = minTop;
        }
        
        $('.parallax-mirror').eq(0).css('top', top + 'px');
    }
    else {
        $('.parallax-mirror').eq(0).css('top', 0);
    }
    
    //console.log("Box1__offsetTop : " + Box1__offsetTop + ", scrollTop : " + scrollTop);
})
