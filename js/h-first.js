
$(document).ready(function(){   
    $("#h-vallu").focus(function (){
        $("#h-vallue").toggle(1000);
    });
    $("#h-vallu").blur(function (){
        $("#h-vallue").toggle(1000);
    });
});




//导航栏文字滑动
function sliding(){
    var swiper = new Swiper('.swiper-container', {
    //   direction: 'vertical',
    slidesPerView: 'auto',
    //   centeredSlides: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        },
    });
    return;
};




function solidG(){
    var mySwiper = new Swiper('#swiper-container1',{
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                        ' / ' +
                        '<span class="' + totalClass + '"></span>';
                    },
                },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            },
    });
    return;
};





$.ajax({
    url: '../js/first.json',
    type: 'get',
    dataType: 'json',
    cache: false,
    success: function (jsonArr){
        var results = '';
        $.each(jsonArr,function (index,item){
            results += `<img src="${item.imgurl}" class="swiper-slide h-carousel-1" alt="">`;
        });
        $('.h-a-carouse').html(results);
    }
});

function haCarouse(){
    // 加载数据
    var mySwiper3 = new Swiper('#swiper-container3',{
        loop: true,
        autoplay:true,
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
    })
};





$(document).ready(function() {
    //首先将#btn隐藏
    $(".h-fanhuidingbu").hide();
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          $(".h-fanhuidingbu").fadeIn(200);
        } else {
          $(".h-fanhuidingbu").fadeOut(200);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $(".h-fanhuidingbu").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        return false;
      });
    });
  });




