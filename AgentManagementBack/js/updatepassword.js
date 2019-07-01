
$("#passwordform").validate({
    onsubmit: true,// 是否在提交是验
    onkeyup: false,
    rules: {//规则
        newpassword: {
            required: true,
            checkpassword: true
        }
    },
    messages: {//验证错误信息
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

$.validator.addMethod("checkpassword", function (value, element) {
    var checkpassword1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/i
    var checkpassword2 = /^(?![^a-zA-Z]+$)(?!\D+$)[0-9a-zA-Z]{6,35}$/i
	var checkpassword3 = /Windows(?=95|98|NT|2000)/i
    return this.optional(element) || (checkpassword3.test(value))
}, "*新密码必须至少八个字节，且同时包含字母和数字！")
//2. (?![^a-zA-Z]+$)
//断言此位置后,字符串结尾之前,所有的字符不能全部由数字（[^a-zA-Z]表示非英文字母,结合下文,这里匹配数字）组成.
//由于当前位置是字符串开始,所以表示整个字符串不能全是数字.
//(?!exp)为零宽断言,表示断言之后的内容不能是exp,[^a-zA-Z]表示非英文字母,+表示可以有多个,$匹配结尾.
//3. (?!\D+$)
//此处用法和2相同,\D表示非数字,即英文(不是数字，就是英文).
//4. [0-9a-zA-Z]{6,35}
//表示匹配整个字符串由6~35位数字和字母组成

//弹窗相关的js
var showtoast = new ShowToast({
    elem: '.showtoastcontainer',
    title: '修改成功',
    content: '密码修改成功',
    comfirmText: '完成'
})

$('.btn-primary').click(function () {
    showtoast.inite({
        confirmfun:fun1,
        cancelfun:fun2
    });
})

function fun1() {

}

function fun2() {

}
