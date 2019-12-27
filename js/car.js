"use strict";

$(document).mousedown(function (e) {
  var ev = e || window.event;
  ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
});
$('.x-inp').click(function () {
  $(this).focus();
  $('.h-header-relative').fadeIn(1000);
});
$('.x_inp').mouseleave(function () {
  $('.x-inp').blur();
  $('.h-header-relative').fadeOut(1000);
});
var x_bigtop1 = document.querySelector('.x-bigtop1');
var x_bigtop2 = document.querySelector('.x-floorfix');
var timer;

x_bigtop1.onclick = function () {
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

  if (scrollT >= 400) {
    x_bigtop1.style.display = 'block';
  } else {
    x_bigtop1.style.display = 'none';
  }

  var pageHeight = document.documentElement.offsetHeight;
  var scrollT = document.documentElement.scrollTop;
  var windowHeight = document.documentElement.clientHeight;

  if (pageHeight - scrollT - windowHeight >= 300) {
    x_bigtop2.style.display = 'block';
    $('.jiesuan').fadeOut(1000);
  } else {
    x_bigtop2.style.display = 'none';
    $('.jiesuan').fadeIn(1000);
  } // if($('.x-floorfix').css('display','block')){
  //     $('.jiesuan').fadeOut(1000);
  // }else{
  //     $('.jiesuan').fadeIn(1000);
  // }

};

$('.x-fade').toggle(function () {
  $('.spot1').html('取消管理');
  $('.x-oo').fadeIn(1000);
}, function () {
  $('.spot1').html('批量管理');
  $('.x-oo').fadeOut(1000);
});
$(function () {
  // 判断购物车是否有数据
  if (localStorage.getItem('goods')) {
    //本地数据  ["abc2","abc6","abc8","abc1"]
    var codeArr = JSON.parse(localStorage.getItem('goods')).code;
    console.log(codeArr); // 加载数据

    $.ajax({
      url: './js/goods.json',
      type: 'get',
      cache: false,
      dataType: 'json',
      success: function success(jsonArr) {
        var results = '';
        $.each(codeArr, function (i, code) {
          // code = 'abc2'
          $.each(jsonArr, function (index, item) {
            // item = {...,code:'abc8'}
            $.each(item, function (index1, item1) {
              if (code == item1.code) {
                // 判断是否为购物车的数据
                results += "<li code=\"".concat(item1.code, "\"><div class=\"x-shoplist1 fl\"><i><input type=\"checkbox\" class=\"x-clickt\"></i></div><img src=\"").concat(item1.imgurl, "\" alt=\"\" class=\"fl\"><p>").concat(item1.title, "</p><div class=\"x-price fl\"><span>\xA5</span><span class=\"danji\">").concat(item1.price, "</span><span>.00</span></div><div class=\"x-number fl\"><div class=\"x-jianleft\">-</div><div class=\"x-num\">").concat(item1.num, "</div><div class=\"x-jiaright\">+</div></div><div class=\"x-price-r fl\"><span>\xA5</span><span class=\"xiaoji\">").concat(item1.price, "</span><span>.00</span></div><div class=\"x-num-r fl x-removes\">\u5220\u9664</div></li>");
              }
            });
          }); // console.log(item.code);
        });
        $('.x-shoplist').append(results);
      }
    }); // 删除购物车商品

    $('.x-shoplist').on('click', 'li .x-removes', function () {
      // 获取要删除商品的编号
      var code = $(this).parent().attr('code'); // 删除数组元素  pop  unshift  splice(index,1)

      $.each(codeArr, function (index, item) {
        if (code == item) {
          codeArr.splice(index, 1); //删除指定下标的数组元素

          return false;
        }
      });

      if (codeArr.length == 0) {
        $('.x-shoplist').append('<li class="x-emty"><span>购物车为空</span><div class="svg-wrapper fr"><svg class=""><rect class="shape"></rect></svg><div class="svg-text"><a href="shop.html"><span class="spot">去购物</span></a></div></div></li>');
        localStorage.removeItem('goods');
      } else {
        // 更新本地存储数据
        var jsonStr = JSON.stringify({
          "code": codeArr
        });
        console.log(jsonStr);
        localStorage.setItem('goods', jsonStr);
      }
    });
    $('.x-removes').click(function () {
      var code = $(this).parent().attr('code');
      codeArr[''];
      $('.x-shoplist').append('<li class="x-emty"><span>购物车为空</span><div class="svg-wrapper fr"><svg class=""><rect class="shape"></rect></svg><div class="svg-text"><a href="shop.html"><span class="spot">去购物</span></a></div></div></li>');
      localStorage.removeItem('goods');
    });
  } else {
    $('.x-shoplist').append('<li class="x-emty"><span>购物车为空</span><div class="svg-wrapper fr"><svg class=""><rect class="shape"></rect></svg><div class="svg-text"><a href="shop.html"><span class="spot">去购物</span></a></div></div></li>');
  }
}); // 计算总数

$(function () {
  var toDoList = {
    init: function init() {
      this.cacheElement();
      this.bindEvent();
    },
    cacheElement: function cacheElement() {
      // 缓存需要用到的元素
      this.$list = $('.x-shoplist');
      this.$all = $('.x-clickAll');
      this.$removes = $('.x-removes');
    },
    bindEvent: function bindEvent() {
      // 添加所有事件
      var _this = this; // 缓存 this 指向
      // 删除某个任务


      this.$list.on('click', 'li .x-num-r', function () {
        $(this).parent().remove();
        initial();
      }); // 点击选择全部

      this.$all.click(function () {
        if ($(this).prop('checked')) {
          // 勾选全部
          _this.$list.find('input').prop('checked', true);

          $('.x-shoplist2').find('input').prop('checked', true);
          $('.x-shoplist3').find('input').prop('checked', true);
          $('.x-goodstop1').find('input').prop('checked', true);
          initial();
        } else {
          // 取消勾选全部
          _this.$list.find('input').prop('checked', false);

          $('.x-shoplist2').find('input').prop('checked', false);
          $('.x-shoplist3').find('input').prop('checked', false);
          $('.x-goodstop1').find('input').prop('checked', false);
          initial();
        }
      }); // 点击选择某个任务

      this.$list.on('click', 'li input', function () {
        var selectArr = []; // 记录每个checkbox的选择状态
        // 循环记录所有input的选择状态

        $('.x-shoplist input').each(function (index, dom) {
          if ($(dom).prop('checked')) {
            selectArr.push('a');
            initial();
          } else {
            selectArr.push('b');
          }
        }); // 判断是否需要全选

        if (selectArr.indexOf('b') == -1) {
          //没有'b'
          _this.$all.prop('checked', true);
        } else {
          _this.$all.prop('checked', false);
        }


      }); // 批量删除

      this.$removes.click(function () {
        $('.x-shoplist input:checked').each(function (index, dom) {
          $(dom).parent().parent().parent().remove(); //删除父节点
        });
        initial();
        _this.$all.prop('checked', false);
      });

    }
  };
  toDoList.init();
}); // var num = $('.x-num').html();

$('.x-shoplist').on('click', '.x-jiaright', function () {
  var num = parseInt($(this).prev().text());
  num++;
  $(this).prev().text(num);

  if ($(this).parent().parent().find('input').prop('checked')) {
    initial();
  } else {
    var money = $(this).parent().parent().find('.danji').text();
    console.log(money);
    $(this).parent().parent().find('.xiaoji').text(num * money);
  }
});
$('.x-shoplist').on('click', '.x-jianleft', function () {
  var num1 = parseInt($(this).next().text());

  if (!(num1 == 1)) {
    num1--;
    $(this).next().text(num1);

    if ($(this).parent().parent().find('input').prop('checked')) {
      initial();
    } else {
      var money = $(this).parent().parent().find('.danji').text();
      console.log(money);
      $(this).parent().parent().find('.xiaoji').text(num1 * money);
    }
  }
});

function initial() {
  var array1 = new Array(); //存储单价里的值

  var array2 = new Array(); //存储数量里的值

  $('.danji').each(function () {
    //遍历单价里的值
    if ($(this).parent().parent().find('input').prop('checked')) {
      var oo = parseFloat($(this).text());
      array1.push(oo); //把值添加进数组
    }
  });
  $(".x-num").each(function () {
    //遍历数量里的值
    if ($(this).parent().parent().find('input').prop('checked')) {
      var ll = parseInt($(this).text());
      array2.push(ll); //把值添加进数组
    }
  });
  var money = 0; //商品总价

  var i = 0;
  $(".xiaoji").each(function () {
    //遍历小计
    if ($(this).parent().parent().find('input').prop('checked')) {
      var count = parseFloat(array1[i]) * parseInt(array2[i]); //单价乘数量获取小计

      $(this).text(count); //设置小计值

      money += count; //统计所有小计总和

      i++;
    } else { }
  });
  $(".zongji").text(money); //设置商品总价
}

initial();