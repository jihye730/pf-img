console.clear();

setTimeout(function() {
    $(window).scrollTop(0);
}, 100);
// 스크롤시 헤더 메뉴바 변화
function NotScrollTop0__init() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop > 20 ) {
        $('html').addClass('not-scroll-top-0');
    }
    else {
        $('html').removeClass('not-scroll-top-0');
    }
}

$(window).scroll(NotScrollTop0__init);
NotScrollTop0__init();

//language 오픈
$('.header .language-box').click(function() {
    var $this = $(this);
    $this.toggleClass('active');
});

//page3 슬릭슬라이더
function Carousel1__onTranslated() {
}
// 밑에서 지정한 no 값 들 각 페이지수 html칸에 넣어주기
function My1__updateCurrentPageNumber(event) {
    var totalItemNo = $('.slider').attr('date-total-items');
    var currentItemNo = $('.slider > .owl-carousel > .owl-stage-outer > .owl-stage > .owl-item.active > .item').attr('data-no');
    
    $('.page3 .total-item-no').html('0'+ totalItemNo);
    $('.page3 .current-item-no').html('0'+ currentItemNo);
}

function My1__init() {
    // 전체 개수 세팅해서 `.page3`의 `date-total-items` 속성에 값 넣기
    var totalItemNo = $('.slider .item').length;
    $('.slider').attr('date-total-items', totalItemNo);
    
    // 각 아이템에 번호 매기기
    $('.slider .item').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.page3 .slider .owl-carousel ').owlCarousel({
        autoplay:false, // 오토 플레이
        loop:true, // 끝에서 다시 처음으로 시작
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        },
        autoplayHoverPause:false, /* 필수 */
        onTranslated: Carousel1__onTranslated,
        onInitialized:My1__updateCurrentPageNumber,
        onTranslated:My1__updateCurrentPageNumber,
    });
}

My1__init();

//프로그레스 바
$('.slider').mouseenter(function() {
    $('.slider > .owl-carousel').trigger('stop.owl.autoplay');
    
    $('.slider').attr('data-carousel-1-autoplay-status', 'N');
});

$('.slider').mouseleave(function() {
    $('.slider > .owl-carousel').trigger('play.owl.autoplay');
    
    $('.slider').attr('data-carousel-1-autoplay-status', 'Y');
});

setInterval(function() {
    $('.slider > .owl-carousel').each(function(index, node) {
        var $carousel = $(node);
        
        if ( $carousel.parent().attr('data-carousel-1-autoplay-status') !== 'N' ) {
            var $gage = $carousel.find('.owl-dots > .owl-dot.active > span');
            var gageWidth = $gage.width();
            var gageParentWidth = $gage.parent().width();
            
            if ( gageWidth >= gageParentWidth ) {
                $carousel.trigger('next.owl.carousel');
            }
        }
    });
}, 500);

// 모바일 우측 메뉴 팝업 열기
$('.header .show-mobile-menu').click(function() {
    var $this = $(this);
    var $header = $this.closest('.header');
    var duration01 = 300;
    
    $header.addClass('active');
    
    var $mobileMenu = $header.find('> .mobile-menu-box');
    $mobileMenu.slideDown(duration01);
});
// 모바일 우측 메뉴 팝업 닫기
$('.header .btn-close').click(function() {
    var $this = $(this);
    var $header = $this.closest('.header');
    var duration01 = 300;
    
    $header.removeClass('active');
    
    var $mobileMenu = $header.find('> .mobile-menu-box');
    $mobileMenu.slideUp(duration01);
});