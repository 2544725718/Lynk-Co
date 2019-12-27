
$('.l-spot').on('click',function (){ //点击登录
    //判断
    if ( $('#l-login-by').val() == '' || $('#l-captcha').val() == '' ){
        $('#l-errory').html('请输入您的手机验证码');
        $('#l-error').html('请输入您的手机号码');
        return false;
    };
    var reg101 = /\d[4]$/g; 
    var vall = $("#l-login-by").val().replace(/\s+/g,'');//去掉空格
    console.log()
    if ( !$('#l-captcha').val() ==  reg101.test( vall )){
        $('#l-login-by').val('');
        $('#l-captcha').val('');
        $(window).attr('location','h-first.html');//页面跳转
        return;  
    }


});


$('.l-btn').on('click',function (){//点击获取验证码按钮

    var reg4 = /^1[3-9]\d{9}$/g;//手机号
    var val = $("#l-login-by").val().replace(/\s+/g,'');//去掉空格

    if (reg4.test(val)) {
        if( $('#l-login-by').val() == '' ){//判断是否输入框有值
            $('#l-error').html('请输入您的手机号码');  
            return false;
        };
        var time = 59;
        if(time == 59){
            var time1 = setInterval(function(){
                if (time == 56){
                    $('.l-logoncapt').animate({left:'0px',top:'-20px', opacity:'0.8'},"slow");
                    $('.l-logonlabel').animate({left:'0px',top:'-20px', opacity:'0.8'},"slow");
                    $('#l-captcha').val( Math.floor(Math.random()*(9999-1000))+1 );
                };
                if(time == 0){
                    $(".l-btn").html("重新发送");
                    $(".l-btn").removeAttr("disabled");
                    time=59;
                    clearInterval(time1);
                }else{
                    $(".l-btn").attr("disabled","true");
                    $(".l-btn").html("重新发送("+time+")");
                    time--;
                }
            }, 1000);
            return false;

        };
    } else{
        $('#l-error').html('请输入正确的手机号码');
        return false;
    };
});


$("#l-login-by").focus(function (){//获得焦点
    $('.l-logonlabel').animate({left:'0px',top:'-20px', opacity:'0.8'},"slow");
});
$("#l-captcha").focus(function (){//获得焦点
    $('.l-logoncapt').animate({left:'0px',top:'-20px', opacity:'0.8'},"slow");
});

$("#l-login-by").blur(function (){ //失去焦点
    if ( !$("#l-login-by").val() == '' ) {//判断是否输入手机号
        $('.l-logonlabel').animate({left:'0px',top:'-20px', opacity:'0.8'},"slow");
    }else{
        $('.l-logonlabel').animate({left:'20px',top:'13px', opacity:'0.4'},"slow");
    }

});

$("#l-captcha").blur(function (){//失去焦点
    if ( !$("#l-captcha").val() == '' ) {//判断是否输入验证码
        $('.l-logoncapt').animate({left:'0px',top:'-20px', opacity:'0.8',},"slow");
    }else{
        $('.l-logoncapt').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    }
});