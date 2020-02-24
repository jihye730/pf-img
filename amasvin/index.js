$('.main .page-btns > div ').click(function() {
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
    var $post = $('.slider > .page-btns > div.active').next('div')

    if ( $post.length == 0 ) {
        $('.slider > .page-btns > div:first-child').click();
    }
    else {
        $post.click();
    }
}, 5000);

