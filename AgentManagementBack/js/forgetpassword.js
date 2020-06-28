$(".formgroup").validate({
    onsubmit: true,// 是否在提交是验证

    rules: {　　　　//规则
        phone: {　　//要对应相对应的input中的name属性
            required: true
        },
        code: {　　//要对应相对应的input中的name属性
            required: true
        },
        captcha: {　　//要对应相对应的input中的name属性
            required: true
        },
        newpassword: {
            required: true,
            newpassword:true
        },
        confirmpassword: {
            required: true,
            confirmpassword:true
        }
    },
    messages: {　　　　//验证错误信息
        phone: {
            required: "手机号不能为空"
        },
        code: {
            required: "短信验证码不能为空"
        },
        captcha: {　　//要对应相对应的input中的name属性
            required: "图形验证码不能为空"
        },
        newpassword: {
            required: "新密码不能为空"
        },
        confirmpassword:{
            required: "确认密码不能为空"
        }
    },
    submitHandler: function (form) { //通过之后回调
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: "/admin/passwordapi",
            type: "POST",
            dataType: "json",
            data: {
                user: $(".username").val(),
                password: $(".password").val()
            },
            success: function (res) {
                if(res.code=="2"){
                    $('.phone').parent().next().text(res.mes)
                }
            },
            error: function (err) {

            }
        });
    },
    invalidHandler: function (form, validator) { return false; },
    errorPlacement: function (error, element) {
        console.log(error)
        console.log(element)
        error.appendTo(element.parent().find('.error-tip'))
        // if(element.parent().find('.error-tip')){
        //     error.appendTo(element.parent().find('.error-tip'))
        // }else{
        //     error.appendTo(element.parent().next('.error-tip'))
        // }
    }
});

// {code: 2, mes: "短信验证码已失效！"}
// code: 2
// mes: "短信验证码已失效！"
$.validator.addMethod("newpassword",function(value,element){
    var newpassword = /^(?=.*[a-z])(?=.*\d)[^]{8,}$/i;
    return this.optional(element)||(newpassword.test(value));
},"*新密码必须至少八个字节，且同时包含字母和数字！");


$.validator.addMethod("confirmpassword",function(value,element){
    var newpassword = $.trim($('.newpassword').val())
    console.log(newpassword)
    if(newpassword == value){
        return true;
    }else{
        return false;
    }

},"*确认密码与新密码不一致");