var countdown = 60;
var times;

//获取验证码

	$('#code').click(function () {
		if($(this).text()!='发送验证码'){
			return false;
		}
		var phone = $.trim($('.phone').val());
		if(!phone){
			mui.toast('请输入手机号',{ duration:'long', type:'div' })
			return;
		}
		settime($('#code'));
		$.ajax({
			type:"POST",
			url:"#",
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
	
$('.mui-btn-primary').click(function () {
	
	var username = $('.username').val()
	var idcard = $('.idcard').val()
	var phone = $('.phone').val()
	var messagecode = $('.messagecode').val()
	
	if ($.trim(username).length == 0) {
		mui.toast('请输入姓名',{ duration:'long', type:'div' })
		return false;
	}
	if ($.trim(idcard).length == 0) {
		mui.toast('请输入身份证号',{ duration:'long', type:'div' })
		return false;
	}else{
		var idcard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
		if(idcard.test($.trim(idcard)) == false) {
			mui.toast('请输入正确的身份证号',{ duration:'long', type:'div' })
			return false;
		}
	}
	
	if ($.trim(phone).length == 0) {
		mui.toast('手机号没有输入',{ duration:'long', type:'div' })
		return false;
	}else{
		var pattern = /^1[34578]\d{9}$/;
		if(pattern.test($.trim(phone)) == false) {
			mui.toast('请输入正确的手机号',{ duration:'long', type:'div' })
			return false;
		}
	}
	
	if ($.trim(messagecode).length == 0) {
			mui.toast('请输入短信验证码',{ duration:'long', type:'div' })
			return false;
	}
	$.ajax({
		type: 'POST',
		url: '#',
		data: {
			
		},
		success: function (data) {
			console.log(data)
		}
	})
})

$('.checkboxContainer').click(function(){
	if(!$(this).hasClass('checkedBg')){
		$(this).addClass('checkedBg').removeClass('uncheckedBg')
		$(this).find('span').attr('chec',1)
	}else{
		$(this).removeClass('checkedBg').addClass('uncheckedBg')
		$(this).find('span').attr('chec',0)
	}
})

//发送验证码倒计时
function settime(obj) {
		if(times){
			clearTimeout(times)
		}
		if (countdown == 0) {
			obj.attr('disabled',false);
			obj.text("获取验证码");
			countdown = 60;
			return;
		} else {
			obj.attr('disabled',true);
			obj.html("重新发送(" + countdown + ")");
			countdown--;
		}
		times = setTimeout(function() {
			settime(obj) }
		,1000)
		
 }