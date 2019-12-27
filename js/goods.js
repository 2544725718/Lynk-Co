"use strict";

$(function () {
  $.ajax({
    url: './js/goods.json',
    type: 'get',
    dataType: 'json',
    cache: false,
    success: function success(jsonArr) {
      $.each(jsonArr, function (index, item) {
        var results = '';
        $.each(item, function (index1, item1) {
          results += "<dl class=\"x-shoplist1\" code=\"".concat(item1.code, "\"><dt><a href=\"#\"><img src=\"").concat(item1.imgurl, "\" alt=\"\"></a></div></dt><dd><a href=\"#\">").concat(item1.title, "</a></dd><dd class=\"x-dd1\"><span>\xA5</span>").concat(item1.price, "<span>.00</span>.00<img src=\"").concat(item1.imgurl1, "\" class=\"img-x\"><img src=\"").concat(item1.imgurl1, "\" alt=\"\" class=\"x-imgcar left_btn\"></dd></dl>");
        });
        $('.x-box div').eq(index).html(results);
      });
    }
  });
  $('.x-box').on('click', '.x-shoplist1 .x-imgcar', function () {
    var code = $(this).parent().parent().attr('code');

    if (localStorage.getItem('goods')) {
      var codeArr = JSON.parse(localStorage.getItem('goods')).code;
    } else {
      var codeArr = [];
    }

    codeArr.push(code);
    var array = [];

    for (var i = 0; i < codeArr.length; i++) {
      if (array.indexOf(codeArr[i]) === -1) {
        array.push(codeArr[i]);
      }
    }

    var jsonStr = JSON.stringify({
      "code": array
    });
    localStorage.setItem('goods', jsonStr);
  });
});
$('.x-box').on('click', '.x-shoplist1 .left_btn', addProduct);

function addProduct(event) {
  var offset = $(".gwcimg").offset(),
      //抛物线图片，可自行更改
  flyer = $('<img src="img/gouwuc.png" width="36" height="36">');
  flyer.fly({
    start: {
      left: event.clientX,
      top: event.clientY
    },
    end: {
      left: offset.left,
      top: 300,
      //抛物线完成后留在页面上的图片大小
      width: 0,
      height: 0
    }
  });
  $(this).css('display', 'none');
}

$('.x-box').on('click', '.x-shoplist1 .img-x', function () {
  alert('购物车已有该商品!');
});