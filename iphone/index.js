// 스크롤리파이 
$(function() {
    $.scrollify({
        section:".panel",
        scrollbars:false,
        before:function(i,panels) {
            $(".panel.active").removeClass('active');

            panels[i].addClass('active');
            panels[i].addClass('visited');
            
            var ref = panels[i].attr("data-section-name");
            
            $('html').attr('data-current-page-name', ref);
            
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function(i, node) {
                activeClass = "";
                
                var ref = $(this).attr("data-section-name");
                
                if ( i === 0 ) {
                    activeClass = "active";

                    $('html').attr('data-current-page-name', ref);
                    $(node).addClass('active');
                    $(node).addClass('visited');
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});
//스크롤리파이 끝