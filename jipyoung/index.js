//a
$('a').attr('target', '_blank');

$('a').click(function() {
    if ( $(this).attr('href') == '#' ) {
        return false;
    }
});

// 헤더 메뉴바 스크롤시 변화
function NotScrollTop0__init() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 20) {
        $('html').addClass('not-scroll-top-0');
    } else {
        $('html').removeClass('not-scroll-top-0');
    }
}

$(window).scroll(NotScrollTop0__init);
NotScrollTop0__init();

// 페이지 버튼
$('.page-btns > div ').click(function () {
    //console.log('hi');
    var $this = $(this);
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    var $slider = $this.closest('.slider');
    var $current = $slider.find(' > .news-slider > a.active');
    var index = $this.index();
    var $post = $slider.find(' > .news-slider > a').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});

// 사이드 버튼
$('.slider .side-btns > div ').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.slider');

    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find(' > .page-btns > .active');
    var $post;

    if (isLeft) {
        $post = $current.prev();
    } else {
        $post = $current.next();
    };

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find('> .page-btns > :last-child');
        } else {
            $post = $slider.find('> .page-btns > :first-child');
        }
    };

    $post.click();
});

setInterval(function () {
    $('.slider').each(function (index, node) {
        var $slider = $(node);

        if ($slider.attr('data-mouseenter') != 'Y') {
            $slider.find('> .side-btns > div:last-child').click();
        }
    });
}, 3000);


$('.slider').mouseenter(function () {
    $(this).attr('data-mouseenter', 'Y');
});

$('.slider').mouseleave(function () {
    $(this).attr('data-mouseenter', 'N');
});

//section04 아울 캐러셀
$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
        0: {
            margin: 30,
            items: 1,
            stagePadding: 50,
        },
        800: {
            margin: 50,
            items: 1,
            stagePadding: 200,
        },
        1500: {
            margin: 50,
            items: 1,
            stagePadding: 400,
        }
    }
})

// 팝업 메뉴 open
$('.gnb-menu .menu-bars').click(function () {
    var $this = $(this);
    var $header = $this.closest('.header');

    $header.find('> nav').addClass('active');
});
// 팝업 메뉴 close
$('nav .close-btn').click(function () {
    var $this = $(this);
    var $header = $this.closest('.header');

    $header.find('> nav').removeClass('active');
});
