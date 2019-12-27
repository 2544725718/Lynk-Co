"use strict";

$(document).mousedown(function (e) {
  var ev = e || window.event;
  ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
});
$('.x-fl .x-jian').click(function () {
  $(this).css('display', 'none');
  $('.x-fl .x-jia').css('display', 'block');
  $('.x-list1').css('display', 'none');
});
$('.x-fl .x-jia').click(function () {
  $(this).css('display', 'none');
  $('.x-fl .x-jian').css('display', 'block');
  $('.x-list1').css('display', 'block');
});
$('.x-fw .x-jian').click(function () {
  $(this).css('display', 'none');
  $('.x-fw .x-jia').css('display', 'block');
  $('.x-list2').css('display', 'none');
});
$('.x-fw .x-jia').click(function () {
  $(this).css('display', 'none');
  $('.x-fw .x-jian').css('display', 'block');
  $('.x-list2').css('display', 'block');
});
$('.x-xl .x-jian').click(function () {
  $(this).css('display', 'none');
  $('.x-xl .x-jia').css('display', 'block');
  $('.x-list3').css('display', 'none');
});
$('.x-xl .x-jia').click(function () {
  $(this).css('display', 'none');
  $('.x-xl .x-jian').css('display', 'block');
  $('.x-list3').css('display', 'block');
});
$('.x-xiaoli').children().click(function () {
  $(this).siblings().removeClass('x-show');
  $(this).addClass('x-show');
});
$('.toggle-line .x-im').click(function () {
  $('.x-shopl-l').animate({
    width: 200
  }, 500, 'swing', function () {
    $('.toggle-line').css('left', '3.255rem'), $('.toggle-line .x-om').css('display', 'block'), $('.toggle-line .x-im').css('display', 'none');
  });
  $('.x-shopl-l').css('display', 'block');
});
$('.toggle-line .x-om').click(function () {
  $('.x-shopl-l').animate({
    width: 0
  }, 500, 'swing', function () {
    $('.x-shopl-l').css('display', 'none'), $('.toggle-line').css('left', '-180px'), $('.toggle-line .x-om').css('display', 'none'), $('.toggle-line .x-im').css('display', 'block');
  });
});
$('.x-inp2').click(function () {
  $(this).focus();
});
$('.x-fenye').mouseleave(function () {
  $('.x-inp2').blur();
});
$('.x-list1').toggle(function () {
  $(this).css('color', '#f54359');
}, function () {
  $(this).css('color', 'white');
});
$('.x-list2').children().toggle(function () {
  $(this).css('color', '#f54359');
}, function () {
  $(this).css('color', 'white');
});
$('.x-list3').children().toggle(function () {
  $(this).css('color', '#f54359');
}, function () {
  $(this).css('color', 'white');
});
$('.x-inp').click(function () {
  $(this).focus();
  $('.h-header-relative').fadeIn(1000);
});
$('.x-head-r').mouseleave(function () {
  $('.x-inp').blur();
  $('.h-header-relative').fadeOut(1000);
});
$('.x-nav1 ul li').each(function (index, item) {
  $(item).click(function () {
    $('.x-list1').html($(this).html());
    $(this).siblings().removeClass('x-color');
    $(this).addClass('x-color');
    $('.x-boxall .x-box div').addClass('x-active').siblings().removeClass('x-active');
    $('.x-boxall .x-box').eq(index).addClass('x-show').siblings().removeClass('x-show');
  });
});

var x_bigtop = document.querySelector('.x-bigtop');
var timer;

x_bigtop.onclick = function () {
  var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
  timer = setInterval(function () {
    scrollT -= 50;

    if (scrollT <= 0) {
      clearInterval(timer);
      scrollT = 0;
    }

    document.body.scrollTop = scrollT;
    document.documentElement.scrollTop = scrollT;
  }, 20);
};

window.onscroll = function () {
  var scrollT = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollT >= 600) {
    x_bigtop.style.display = 'block';
  } else {
    x_bigtop.style.display = 'none';
  }
};