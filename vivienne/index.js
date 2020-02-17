// 퀵 메뉴
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var duration = 500;
    
    $('.quick').stop().animate({top:scrollTop},duration);
    
});

// 슬라이더
var Slider__$pageBtns = $('.slider-1 .page-btns > div');

Slider__$pageBtns.click(function() {
    var $this = $(this);
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $slider = $this.closest('.slider-1');
    var $current = $slider.find('> .slides > div.active');
    var index = $this.index();
    
    $current.removeClass('active');
    $slider.find(' > .slides > div').eq(index).addClass('active');
});

$('.slider-1 > .side-btns > div').click(function () {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    var index = $this.index();
    var isLeft = index == 0;
    
    var $current = $slider.find(' > .page-btns > div.active ');
    var $post;
    
    if (isLeft) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    
    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .page-btns  > div:last-child');
        }
        else {
            $post = $slider.find(' > .page-btns  > div:first-child');
        }
    }
    
    $post.click();
});

setInterval(function() {
    $('.slider-1 > .side-btns > div').eq(1).click();
},3000);

// 베스트 오브 아이템
$('.item-con > .item-menu > ul > li ').mouseenter(function() {
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $item__con = $this.closest('.item-con');
    
    var $current = $item__con.find(' > .best-item-list.active');
    var $post = $item__con.find(' > .best-item-list').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
})