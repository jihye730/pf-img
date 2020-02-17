setTimeout(function() {
    $(window).scrollTop(0);
}, 100);

// 헤더 메뉴바 스크롤시 변화
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


var $liIndicator1 = $('.top-bar .menu-box-1 > .li-indicator-1-box > .li-indicator-1');

// 인디케이터 시작
$('.top-bar .menu-box-1 > ul > li').mouseenter(function() {
    var $this = $(this);
    
    var $menuBox1 = $this.closest('.menu-box-1');
    var menuBox1Left = $menuBox1.position().left;
    var $span = $this.find(' > a > span');
    
    var positionLeft = $span.position().left - menuBox1Left;
    
    var width = $span.outerWidth();
    
    $liIndicator1.css({
        width:width,
        left:positionLeft
    });
});

$('.top-bar .menu-box-1 > ul > li').mouseleave(function() {
    /*
    $liIndicator1.css({
        left:''
    });
    */
    
    $liIndicator1.css('left', '');
});
// 인디케이터 끝

// 서브메뉴
$('.top-bar .menu-box-1 > ul > li').mouseenter(function() {
    var $this = $(this);
    var $topBar = $this.closest('.top-bar');
    
    var $contentBox = $topBar.find('.content-box');
    
    $contentBox.find('> ul > li.active').removeClass('active');
    
    var index = $this.index();
    var $target = $contentBox.find('> ul > li').eq(index);
    $target.addClass('active');
    
    var height = $target.height();
    
    $contentBox.css('height', height);
});

$('.top-bar').mouseleave(function() {
    var $topBar = $(this);
    
    var $contentBox = $topBar.find('.content-box');
    $contentBox.css('height', '');
});

//banner slide (page1) 슬라이드
$('.page-wrap > .page-btns > div').click(function() {
    var $this = $(this);
    
    $this.siblings('.active').removeClass('active');
    $this.addClass('active');
    
    var $pageWrap = $this.closest('.page-wrap');
    var $current = $pageWrap.find('> section.active');
    var index = $this.index();
    
    $current.removeClass('active');
    $pageWrap.find('> section').eq(index).addClass('active');
});

setInterval(function(){
    if ( $('.wrap .page-wrap').attr('data-autoplay') == 'Y' ){
        var $post = $('.page-wrap > .page-btns > div.active').next('div')
        
        if ( $post.length == 0 ) {
            $('.page-wrap > .page-btns > div:first-child').click();
        }
        else {
            $post.click();
        }
    }
}, 5000);

$('.wrap .page-btns > .play-btns .stop').click(function() {
    $('.wrap .page-wrap').attr('data-autoplay','Y');
    //alert('stop');
});
$('.wrap .page-btns > .play-btns .play').click(function() {
    $('.wrap .page-wrap').attr('data-autoplay','N');
    //alert('play');
});

// 더보기 토글
$('.page-wrap > .quick > .btn-more').click(function() {
    var $this = $(this);
    var $quick = $this.closest('.quick');
    var $target = $quick.find('> ul > .hide'); 
    var hideHasClassActive = $target.hasClass('active');
    
    if ( hideHasClassActive ) {
        //console.log("active 클래스를 가지고 있습니다.");
        $target.removeClass('active');
    }
    else {
        //console.log("active 클래스를 가지고 있지 않습니다.");
        $target.addClass('active');
    }
});

// 뉴스 슬라이드 버튼
$('section .news-slider > .page-btns > div').click(function () {
    var $this = $(this);
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var index = $this.index();
    
    var $newsSlider = $this.closest('.news-slider');
    
    $newsSlider.find(' > .news-slides > ul > li.active').removeClass('active');
    $newsSlider.find(' > .news-slides > ul > li').eq(index).addClass('active');
});

// 팝업 슬라이더
$('.popup .slider .page-btns > div').click(function() {
    var $this = $(this);
    $this.siblings('.active').removeClass('active');
    $this.addClass('active');
    
    var $slider = $this.closest('.slider');
    var $current = $slider.find('> .slides > div.active');
    var index = $this.index();
    
    $current.removeClass('active');
    $slider.find('> .slides > div').eq(index).addClass('active');
});


setInterval(function(){
    if ( $('.popup .slider').attr('data-autoplay') == 'Y' ){
        var $post = $('.popup .slider .page-btns > div.active').next('div')
        
        if ( $post.length == 0 ) {
            $('.popup .slider .page-btns > div:first-child').click();
        }
        else {
            $post.click();
        }
    }
}, 3000);

$('.popup .slider .page-btns > .btn-play').click(function() {
    $('.popup .slider').attr('data-autoplay','Y');
    
});
$('.popup .slider .page-btns > .btn-stop').click(function() {
    $('.popup .slider').attr('data-autoplay','N');
});

//page 이동
$('#page-nav > li > a').click(function(e) {
    var href = $(this).attr('href');
    
    var targetTop = $(href).offset().top;
    
    /*
    // 한번에 가도록 하는 방법
    $(window).scrollTop(targetTop);
    */
    
    $('html').stop().animate({scrollTop:targetTop}, 300);
    
    e.preventDefault();
});

function Page__updateIndicatorActive() {
    var scrollTop = $(window).scrollTop();
    
    // 역순으로 검색해야 편하다
    $($('.sec-page').get().reverse()).each(function(index, node) {
        var $node = $(this);
        var offsetTop = parseInt($node.attr('data-offset-top'));
        
        if ( scrollTop + 500 >= offsetTop ) {    
            // 기존 녀석에게 활성화 풀고
            $('#page-nav > li.active').removeClass('active');
            // 해당하는 녀석에게 활성화 넣고
            
            var currentPageIndex = $node.index();
            $('#page-nav > li').eq(currentPageIndex).addClass('active');
            
            $('html').attr('data-current-page-index', currentPageIndex);
            
            return false; // 더 이상 다른 페이지를 검사하지 않는다.
        }
    });
}

// 각 페이지의 offsetTop 속성을 업데이트
function Page__updateOffsetTop() {
    
    $('.sec-page').each(function(index, node) {
        var $page = $(node);
        var offsetTop = $page.offset().top;
        
        $page.attr('data-offset-top', offsetTop);
    });
    
    // 계산이 바뀌었으니까, 다시 상태 업데이트
    Page__updateIndicatorActive();
}

function Page__init() {
    Page__updateOffsetTop();
}

// 초기화
Page__init();

// 화면이 리사이즈 할 때 마다, offsetTop을 다시계산
$(window).resize(Page__updateOffsetTop);

// 스크롤이 될 때 마다, 인디케이터의 상태를 갱신
$(window).scroll(Page__updateIndicatorActive);



//page 4 - slick slider
$('section > .business > .layout > .slider > .slides').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:true,
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next')
});

//link banner 
$('.link-banner .row').slick({
    autoplay: false,
    arrows:true,
    slidesToShow: 5,
    variableWidth: true,
    touchMove: false,
    prevArrow: $('.link-btn-prev'),
    nextArrow: $('.link-btn-next')
});

//footer 토글
$('.footer > .layout > .site-box > .relate-site > .box-1').click(function() {
    var $this = $(this);
    $this.toggleClass('active');
});
//footer 마우스리브
$('.footer > .layout > .site-box > .relate-site').mouseleave(function() {
    var $this = $(this);
    var $taget = $this.find("> .box-1");
    $taget.removeClass('active');
});


//우측 팝업메뉴 윈도우v 열기
$('.wrap .top-bar .gnb .allmenu-btn').click(function() {
    var $this = $(this);
    var $wrap = $this.closest('.wrap');
    var $sideMap = $wrap.find('> .side-map');
    
    $sideMap.addClass('active');
    $('html').attr('data-side-bar-actived', 'N');
});

//우측 팝업메뉴 윈도우v 닫기
$('section > .wrap > .side-map > .inner > .btn-close').click(function() {
    var $this = $(this);
    var $wrap = $this.closest('.wrap');
    var $sideMap = $wrap.find('> .side-map');
    
    $sideMap.removeClass('active');
    $('html').attr('data-side-bar-actived', 'N');
});

// 사이드메뉴 이너 > 토글버튼
$('section > .wrap > .side-map > .inner > .menu-box > .nav > li > .btn-toggle').click(function() {
    var $this = $(this);
    $this.toggleClass('active');
    
    var $li = $(this).closest('li');
    var $ul = $li.find('> ul.row');
    var duration01 = 300;
    
    if ($this.hasClass('active')) {
        $ul.slideDown(duration01);
    }
    else {
        $ul.slideUp(duration01);
    }
});

//a 태그 무효화
$('a').click(function(e) {
    e.preventDefault();
});