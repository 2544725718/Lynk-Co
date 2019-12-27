$('.k-spot').on('click',function (){
    if ( $('#k-captcha').val() == '' ){
        $('#k-errory').html('请输入您的手机号码');
        return;
    };

    //清空输入框里的值
    $('#k-login-by').val('');
    $('#k-captcha').val('');

    

    //判断手机格式是否正确
    var reg4 = /^1[3-9]\d{9}$/g;//手机号
    var val = $("#k-captcha").val().replace(/\s+/g,'');//去掉空格
    if (reg4.test(val) ) {
        console.log('格式正确！');
    } else {
        $('#k-errory').html('请输入正确的手机号码');
    };

    $(window).attr('location','kl-regis.html');//跳转到另一个页面
    

    //判断输入框是否有值
    if ( $('#k-login-by').val() == '' ){
        $('#k-error').html('请输入用户名');
        return;
    };
    if ( $('#k-captcha').val() == '' || $('#k-login-by').val() == '' ){
        $('#k-errory').html('请输入您的手机号码');
        $('#k-error').html('请输入用户名');
        return;
    };

});





//获取焦点事件
$("#k-login-by").focus(function (){
    $('.k-logonlabel').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
});
$("#k-captcha").focus(function (){
    $('.k-logoncapt').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
});

//失去焦点事件
$("#k-login-by").blur(function (){
    if ( !$('#k-login-by').val() == '' ){
        $('.k-logonlabel').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
    }else{
        $('.k-logonlabel').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    };  
});
$("#k-captcha").blur(function (){
    if ( !$('#k-captcha').val() == '' ){
        $('.k-logoncapt').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
    }else {
        $('.k-logoncapt').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    };   
});









