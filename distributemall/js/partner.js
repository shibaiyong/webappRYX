var countdown = 60;
var times;
var uid = $('.login_uid').val();
var pid = $.trim($('.pid').val());
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
			type:"get",
			url:"sendusercode",
			data:{phone:phone,uid:uid},
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
	var bankcard = $('.bankcard').val()
	

	if ($.trim(bankcard).length == 0) {
		mui.toast('请输入卡号',{ duration:'long', type:'div' })
		return false;
	}else{
		var bankcardreg = /^\d{1,20}$/;
		if(bankcardreg.test($.trim(bankcard)) == false) {
			mui.toast('请输入卡号',{ duration:'long', type:'div' })
			return false;
		}
	}
	
	if ($.trim(phone).length == 0) {
		mui.toast('手机号没有输入',{ duration:'long', type:'div' })
		return false;
	}else{
		var pattern = /^1[3456789]\d{9}$/;
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
		type: 'get',
		url: 'apiaddpartner',
		data: {
			phone,
			code:messagecode,
			card_number:bankcard,
			type:1,
			uid:uid,
			pid:pid,
			username,
			idcard
		},
		success: function (data) {
			if(data.code == 1){
				// window.location.href="partner_page?login_uid="+login_uid
				window.location.href="/shop/partnercore?uid="+uid
			}else if(data.code == 3){
				mui.toast(' 绑卡失败',{ duration:'long', type:'div' })
			}else if(data.code == 2){
				mui.toast(data.mes,{ duration:'long', type:'div' })
			}else if(data.code == 7){
				mui.toast(data.mes,{ duration:'long', type:'div' })
			}
		}
	})
})

$('.supportbank a').click(function () {
	$('.showtoastcontainer').css('visibility','visible');
})


$('.showtoastcontainer .closeicon').click(function () {
	$('.showtoastcontainer').css('visibility','hidden');
})
//发送验证码倒计时
function settime(obj) {
		if(times){
			clearTimeout(times)
		}
		if (countdown == 0) {
			obj.attr('disabled',false);
			obj.text("发送验证码");
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