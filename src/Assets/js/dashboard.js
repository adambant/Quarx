/*
|--------------------------------------------------------------------------
| Menu Highlighter
|--------------------------------------------------------------------------
*/

$('.nav-sidebar li').each(function(){
    if ($('.page-header').text().toLowerCase().trim() == ($(this).children('a').text().toLowerCase().trim())) {
        $(this).addClass('active');
    }
});

/*
|--------------------------------------------------------------------------
| Dashboard Panel
|--------------------------------------------------------------------------
*/

function _setDashboard () {
    if ($(window).width() < 768) {
        $('.sidebar').css({
            left: '-300px',
        });

        $('.sidebar-menu-btn .nav-open').unbind().bind('click', function(){
            $('.overlay').fadeIn();
            $('.sidebar').animate({
                left: 0
            }, 'fast');
            $('.sidebar-menu-btn .nav-open').hide();
            $('.sidebar-menu-btn .nav-close').show();
        });
        $('.sidebar-menu-btn .nav-close').unbind().bind('click', function(){
            $('.overlay').fadeOut();
            $('.sidebar').animate({
                left: '-'+$(window).width()+'px',
            }, 'fast');
            $('.sidebar-menu-btn .nav-close').hide();
            $('.sidebar-menu-btn .nav-open').show();
        });
        $('.overlay').unbind().bind('click', function(){
            $('.overlay').fadeOut();
            $('.sidebar').animate({
                left: '-'+$(window).width()+'px',
            }, 'fast');
        });
    } else {
        $('.sidebar-menu-btn').remove();
        $('.sidebar').css({
            left: 0
        });
    }
}
