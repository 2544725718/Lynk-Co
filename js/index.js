// 获取元素到body的左侧或顶部的距离
function offset(dom) {
    var l = 0, t = 0;
    var bdl = dom.clientLeft;//左边框
    var bdt = dom.clientTop;//上边框
    while (dom) {
        t = t + dom.offsetTop + dom.clientTop;
        dom = dom.offsetParent;//每次循环后，让此元素等于它的定位父级
    }
    return { top: t - bdt };
}

var imgs = document.querySelectorAll('.xzq-img img');
var windowHeight = document.documentElement.clientHeight;//窗口的高
loadImg();//进入页面执行
function loadImg() {
    var scrollT = document.body.scrollTop || document.documentElement.scrollTop;//滚动条的高
    for (var i = 0, len = imgs.length; i < len; i++) {
        var imgTop = offset(imgs[i]).top;
        if (imgTop <= windowHeight + scrollT) {//图片进入窗口
            imgs[i].className = 'active2';
        }
    }
}
window.onscroll = function () {//滚动条变化时执行
    loadImg();
}

var o = false;
var shVideo = document.getElementById('shVideo');
var mySwiper = new Swiper('.swiper-container', {
    on: {
        slideChangeTransitionEnd: function () {
            if (this.realIndex == 10) {
                shVideo.play();
                this.autoplay.stop();
                o = true;
                shVideo.addEventListener('ended', function () {
                    this.autoplay.start();
                    shVideo.currentTime = 0;
                }.bind(this), false);
            } else {
                if (o) {
                    shVideo.pause();
                    this.autoplay.start();
                    o = false;
                }
            }
        }
    },

    //direction: 'vertical', // 垂直切换选项
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    //自动切换
    //autoplay:true,//等同于以下设置
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }
});

