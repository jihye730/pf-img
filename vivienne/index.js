// 우측 퀵 메뉴바
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    /*
    if ( scrollTop < 150 ) {
        scrollTop = 150;
    }
    */
    
    var duration = 500;
    $('.quick').stop().animate({top:scrollTop}, duration);
    
    console.log(scrollTop);
});

// 상단 배너 중앙 슬라이더
// 기존 버튼형 슬라이더
$('.slider > .page-btns > div').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find(' > .slides > a.active');
    
    var $post = $slider.find(' > .slides > a').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
});

// 좌/우 버튼 추가 슬라이더
$('.slider-1 > .side-btns > div').click(function(){
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    var index = $this.index();
    var isLeft = index == 0;
    
    var $current = $slider.find(' > .page-btns > div.active');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .page-btns > div:last-child');
        }
        else {
            $post = $slider.find(' > .page-btns > div:first-child');
        }
    };
    
    $post.click();
});

setInterval(function(){
    $('.slider-1 > .side-btns > div').eq(1).click();
}, 3000);


// CHECK THIS //
var checkBtns = $('.slider-2 > .side-btns > div');

checkBtns.click(function(){
    var $this = $(this);
    var index = $this.index();
    
    var isLeft = index == 0;
    var $slider = $this.closest('.slider-2');
    
    var $current = $slider.find(' > .slides > a.active');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };
    
    if ( $post.length == 0 ) {
        if ( isLeft ) {
            $post = $slider.find(' > .slides > a:last-child');
        }
        else {
            $post = $slider.find(' > .slides > a:first-child');
        }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
});

// 베스트 오브 베스트 아이템
$('.item-con > .item-menu > ul > li').mouseenter(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $item__con = $(this).closest('.item-con');
    
    var $current = $item__con.find(' > .best-item-list.active');
    var $post = $item__con.find(' > .best-item-list').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
});