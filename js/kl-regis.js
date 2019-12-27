

$('.kl-spot').on('click',function (){
  
    if ( $('#kl-login-by').val() == '' || $('#kl-captcha').val() == '' || $('#kl-login-by-mima').val() == ''){

        if ( !$('#kl-captcha').val() == '' ){
            var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
            var val = $("#kl-captcha").val().replace(/\s+/g,'');//去掉空格
        }
        $('#kl-errory').html('请输入符合规则的密码');
        // $('#kl-error').html('请输入您的验证码');
        $('#kl-erroryr').html('您输入的两次密码不同 ');
        return false;
    }else{
        $('#kl-login-by').val();
        if( $('#kl-captcha').val() == $('#kl-login-by-mima').val() ){
            $(window).attr('location','l-logon.html');//页面跳转
        };
    };
});
$("#kl-login-by").on('click',function (){
    var kl_regiso = ( Math.floor(Math.random()*(9999-1000))+1 );
    alert(kl_regiso);
    if ($('#kl-login-by').val() == kl_regiso){
    }else{
        $('#kl-error').html('您的验证码输入有误');
    }
});












$("#kl-login-by").focus(function (){
    $('.kl-logonlabel').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
})

$("#kl-captcha").focus(function (){
    $('.kl-logoncapt').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
})
$("#kl-login-by-mima").focus(function (){
    $('.kl-logonlabel-mima').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
    
})

$("#kl-login-by").blur(function (){
    // $('.kl-logonlabel').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    if ( !$("#kl-login-by").val() == ''){
        $('.kl-logonlabel').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
    }else{
        $('.kl-logonlabel').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    }
})

$("#kl-captcha").blur(function (){
    // $('.kl-logoncapt').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    if ( !$("#kl-captcha").val() == ''){
        $('.kl-logoncapt').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
    }else{
        $('.kl-logoncapt').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    }
});

$("#kl-login-by-mima").blur(function (){
    // $('.kl-logonlabel-mima').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    if ( !$("#kl-login-by-mima").val() == ''){
        $('.kl-logonlabel-mima').animate({left:'0px',top:'-10px', opacity:'0.8',},"slow");
    }else {
        $('.kl-logonlabel-mima').animate({left:'20px',top:'13px', opacity:'0.4',},"slow");
    }
})









