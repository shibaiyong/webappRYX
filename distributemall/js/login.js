var countdown = 60;
var times

//获取验证码

$('#messagecode').click(function () {
    if($(this).text()!='获取验证码'){
        return false;
    }
    var phone = $.trim($('.phone').val());
    if(!phone){
        mui.toast('请输入手机号',{ duration:'long', type:'div' })
        return;
    }
    settime($('#messagecode'));
    $.ajax({
        type:"POST",
        url:"/Auth/sendusercode",
        data:{phone:phone},
        dataType:"json",
        success:function(data){

        },
        error:function(jqXHR){
            console.log("Error: "+jqXHR.status);
        }
    });
})

//用户点击提交按钮验证

$('#login').click(function () {
    if ($.trim($('.phone').val()).length == 0) {
        mui.toast('手机号没有输入',{ duration:'long', type:'div' })
        return false;
    }else{
        var pattern = /^1[3456789]\d{9}$/;
        if(pattern.test($.trim($('.phone').val())) == false) {
            mui.toast('请输入正确的手机号',{ duration:'long', type:'div' })
            return false;
        }
    }
    if ($.trim($('.verifycode').val()).length == 0) {
        mui.toast('请输入短信验证码',{ duration:'long', type:'div' })
        return false;
    }
    // if($('#mycheck1').attr('chec')==0){
    //     mui.toast('请同意用户注册协议',{ duration:'long', type:'div' })
    //     return false;
    // }
    //
    // if($('#mycheck2').attr('chec')==0){
    //     mui.toast('请同意用户隐私保护政策',{ duration:'long', type:'div' })
    //     return false;
    // }

    var phone=$('.phone').val();
    var code=$('.verifycode').val();
    var pid=$('#pid').val();
    var type=$('#type').val();
    var openid=$('#openid').val();
    var headimgurl=$('#headimgurl').val();
    var wx_name=$('#wx_name').val();
    var goods_id=$('#goods_id').val();
    var re_url=$('#re_url').val();
    $.ajax({
        type: 'POST',
        url: '/Auth/apilogin/',
        data: {
            phone,
            code,
            pid,
            type,
            openid,
            wx_name,
            headimgurl,
            goods_id,
            re_url
        },
        success: function (data) {
            if(data.code==2){
                mui.toast(data.mes,{ duration:'long', type:'div' })
            }else if(data.code==1){
                window.location.href="/goods/index?uid="+data.user_id
            }else if(data.code==3){
                window.location.href="/goods/index?uid="+data.user_id
            }else if(data.code==4){
                window.location.href="/goods/goods_list?uid="+data.user_id+'&goods_id='+data.goods_id
            }
        }
    })
})
//发送验证码倒计时
function settime(obj) {
    if(times){
        clearTimeout(times)
    }
    if (countdown == 0) {
        obj.attr('disabled',false);
        obj.css('background','#FFD455');
        obj.text("获取验证码");
        countdown = 60;
        return;
    } else {
        obj.attr('disabled',true);
        obj.css('background','rgb(204,204,204)');
        obj.html("重新发送(" + countdown + ")");
        countdown--;
    }
    times = setTimeout(function() {
            settime(obj) }
        ,1000)

}

// $('.checkboxContainer').click(function(){
//     if(!$(this).hasClass('checkedBg')){
//         $(this).addClass('checkedBg').removeClass('uncheckedBg')
//         $(this).find('span').attr('chec',1)
//     }else{
//         $(this).removeClass('checkedBg').addClass('uncheckedBg')
//         $(this).find('span').attr('chec',0)
//     }
// })