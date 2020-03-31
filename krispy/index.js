//aos
AOS.init();

//pop sub menu
$('.header .top-menu .menu-1, .sub-menu').mouseenter(function() {
    //alert('hi');
    $('.sub-menu').stop().slideDown(500);
    $('.sub-menu').addClass('active');
});
$('.header .top-menu .menu-1, .sub-menu').mouseleave(function() {
    $('.sub-menu').stop().slideUp(500);
    $('.sub-menu').removeClass('active');
});

//item-list : donut
$('.page1 .item-menu li').click(function() {
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