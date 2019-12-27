$('.photo_img').mouseover(function () {
    $(this).find('.cover-text').addClass("Active");
    $(this).siblings().find('.cover-text').removeClass("Active");
    var index = $(this).index();
    $('.Text-h:eq(' + index + ')').addClass("active2").siblings().removeClass('active2');
})