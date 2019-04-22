

//日历组件初始化
$('.timeinput').each(function (index, item) {
    var elem = '#' + $(item).attr('id');
    laydate.render({
        elem: elem,
        done: function (value, date, endDate) {
            //主动让输入框失去焦点，去触发表单校验。跟日历插件本事无关;
            $(this.elem[0]).blur();
        }
    })

})

//表单校验

$("#dataform").validate({
    onsubmit: true,// 是否在提交是验证
    onkeyup: false,
    rules: {　　　　//规则
        memebername: {　　//要对应相对应的input中的name属性
            required: true
        },
        memeber: {
            required: true
        },
        endtime: {
            required: true
        },
        starttime: {
            required: true
        }
    },
    messages: {　　　　//验证错误信息
        memebername: {
            required: "用户名不能为空",
        },
        memeber: {
            required: "密码不能为空"
        },
        starttime: {
            required: "密码不能为空"
        },
        endtime: {
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
        error.appendTo(element.parent().find('.error-tip'))
    }
});

