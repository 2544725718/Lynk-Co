$('.Top').load('public/Top.html', function () {
    $('.readyPage').load('public/readyPage.html', function () {
        $('.TopMenuDropdown').load('public/TopMenuDropdown.html', function () {
            $('.footerUl').load('public/footerUl.html', function () {
                $('.fborder').load('public/fborder.html', function () {
                    $('.fixedMenuBtn').load('public/fixedMenuBtn.html', function () {
                        var timer = null;
                        $('#topTop').click(function () {
                            if (timer == null) {
                                var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
                                timer = setInterval(function () {
                                    scrollT -= 50;
                                    if (scrollT < 0) {
                                        scrollT = 0;
                                        clearInterval(timer);
                                        timer = null;
                                    }
                                    document.body.scrollTop = scrollT;
                                    document.documentElement.scrollTop = scrollT;
                                }, 10);
                            }
                        });

                        $('.search').click(function () {
                            $('.headerMenu').css('display', 'none');
                            $('.navbar-right').css('display', 'none');
                            $('.topSearch').fadeIn(500);
                        });

                        $('.search-no').click(function () {
                            $('.topSearch').fadeOut(500);
                            $('.headerMenu').css('display', 'block');
                            $('.navbar-right').css('display', 'block');
                        });

                        $('.headerMenu > li').mouseover(function () {
                            $(this).addClass('change').siblings().removeClass();
                            var index = $(this).index();
                            if (index <= 3) {
                                $('.TopMenuDropdown').css('display', 'block');
                                $('.meet-leg:eq(' + index + ')').css('display', 'block').siblings().css('display', 'none');
                            } else if (index > 3 && index <= 6) {
                                $('.TopMenuDropdown').css('display', 'none');
                            }
                        });

                        $('.TopMenuDropdown').mouseleave(function () {
                            $(this).css('display', 'none');
                        });

                        $('.beginMenuBtn').click(function () {
                            $('.readyPage').toggleClass('active');
                        })

                        $(document).scroll(function (ev) {
                            $('.active').attr('class', 'readyPage');
                        })

                        $(document).click(function (ev) {
                            var e = ev || window.event;
                            var tar = e.target || e.srcElement;
                            if (!(tar.className == 'beginMenuBtn' || tar.parentNode.className == 'beginMenuBtn')) {
                                $('.active').attr('class', 'readyPage');
                            }
                        })
                    })
                });
            });
        })
    })
});