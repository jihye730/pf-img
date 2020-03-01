$('.wrap section article').mouseenter(function() {
    var $this = $(this);
    var $wrap = $(this).closest('.wrap');
    var $target = $wrap.find('> .textshow > .inner')
    var index = $this.index();
    
    $target.eq(index).addClass('active');
});
$('.wrap section article').mouseleave(function() {
    var $this = $(this);
    var $wrap = $(this).closest('.wrap');
    var $target = $wrap.find('> .textshow > .inner')
    var index = $this.index();
    
    $target.eq(index).removeClass('active');
});