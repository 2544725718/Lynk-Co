"use strict";

var mySwiper = new Swiper('#mySwiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var pos_top = document.querySelector('.position-r');
var timer;

pos_top.onclick = function () {
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
    pos_top.style.display = 'block';
  } else {
    pos_top.style.display = 'none';
  }
};

$(document).mousedown(function (e) {
  var ev = e || window.event;
  ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
});