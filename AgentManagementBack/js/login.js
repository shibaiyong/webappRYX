$(".formgroup").validate({
    onsubmit: true,// 是否在提交是验证

    rules: {　　　　//规则
        username: {　　//要对应相对应的input中的name属性
            required: true
        },
        password: {
            required: true
        }
    },
    messages: {　　　　//验证错误信息
        username: {
            required: "用户名不能为空",
            remote: {//权重之和不能大于1判断
                url: this.projectName + "/powerWeather/judgeWeightTotal.action",
                type: "post",
                data: {},
                dataFilter: function (data) {
                    var jsObject = JSON.parse(data); 
                    if (jsObject.data > 0) {
                        //this.validateMessage在前面定义为通用属性
                        this.validateMessage = "该设备已分配权重为" + jsObject.weightYet + ",所有权重之和不能大于1";
                        //改写提示的错误信息
                        $.validator.messages["remote"] = this.validateMessage;
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        },
    password: {
        required: "密码不能为空"
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
        console.log(error)
        console.log(element)
        error.appendTo(element.parent().find('.error-tip'))
    }
}); 
