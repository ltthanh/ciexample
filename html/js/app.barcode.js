(function() {
    $('.footer-bar ul li').click(function(e) {
        var _idpage = $(this).data("pageid");
        $('.footer-bar ul li').removeClass('active');
        $(this).addClass('active');
        $('.page').removeClass('active');
        $('#'+_idpage).addClass('active');
    });
})();