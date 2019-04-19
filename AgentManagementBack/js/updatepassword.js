

$("#passwordform").validate({
    onsubmit: true,// 是否在提交是验
    onkeyup:false,
    rules: {　　　　//规则
        newpassword: {
            required: true,
            checkpassword:true
        }
    },
    messages: {　　　　//验证错误信息
        newpassword: {
            required: "新密码不能为空"
        }
    },
    submitHandler: function (form) { //通过之后回调
        $.ajax({
            url: "/data/json",
            type: "get",
            dataType: "json",
            data: {
                user: $(".username").val(),
                password: $(".password").val()
            },
            success: function (res) {

            },
            error: function (err) {

            }
        });
    },
    invalidHandler: function (form, validator) { return false; },
    errorPlacement: function (error, element) {
        error.appendTo(element.parent().find('.error-tip'))
    }
});

$.validator.addMethod("checkpassword",function(value,element){ 
    var checkpassword = /^(?=.*[a-z])(?=.*\d)[^]{8,}$/i; 
    return this.optional(element)||(checkpassword.test(value)); 
  },"*新密码必须至少八个字节，且同时包含字母和数字！"); 