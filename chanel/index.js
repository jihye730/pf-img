//page1 bob - item slide
$('.page1 > .item-menu > ul > li').mouseenter(function () {
    var $this = $(this);
    var index = $this.index();

    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    var $best__item = $this.closest('.best-item');

    var $current = $best__item.find(' > .item-list.active');
    var $post = $best__item.find(' > .item-list').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});

//cursor box
$('document').ready(function () {
    $('.item-list > ul > li > a').mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $('.cursor-box').css({
            left: mouseX + 20 + "px",
            top: mouseY + 20 + "px"
        });
    });
});
$('.item-list > ul > li > a').mouseleave(function () {
    $('.cursor-box').css('display', 'none')
});
$('.item-list > ul > li > a').mouseenter(function () {
    $('.cursor-box').css('display', 'block')
});

//page2 active on visible 
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if (!$node.attr('data-active-on-visible-diff-y')) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if (!$node.attr('data-active-on-visible-delay')) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
    $('.active-on-visible:not(.active)').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
            setTimeout(function () {
                $node.addClass('active');
            }, delay);
        }
    });
}

ActiveOnVisible__init();

//insta cursor
$('document').ready(function () {
    $('.page4 > .con > .col').mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $('.insta-cursor').css({
            left: mouseX + 70 + "px",
            top: mouseY + 70 + "px"
        });
    });
});
$('.page4 > .con > .col').mouseleave(function () {
    $('.insta-cursor > img').css('display', 'none')
});
$('.page4 > .con > .col').mouseenter(function () {
    $('.insta-cursor > img').css('display', 'block')
});
