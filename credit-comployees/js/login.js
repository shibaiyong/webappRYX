var countdown = 60;
var times

//获取验证码

	$('#messagecode').click(function () {
		if($(this).text()!='获取验证码'){
			return false;
		}
		var phone = $.trim($('#phone').val());
		if(!phone){
			mui.toast('请输入手机号',{ duration:'long', type:'div' })
			return;
		}
		settime($('#messagecode'));
		
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
	
	$('#code').on('input',function(){
		var str = $(this).val();
		if(str.length>=8){
			$(this).val(str.slice(0,str.length/2))
		}
	})
	
	//用户点击提交按钮验证
	
$('.mui-btn-primary').click(function () {
	// if ($.trim($('#phone').val()).length == 0) {
	// 	mui.toast('手机号没有输入',{ duration:'long', type:'div' })
	// 	return false;
	// }else{
	// 	var pattern = /^1[34578]\d{9}$/;
	// 	if(pattern.test($.trim($('#phone').val())) == false) {
	// 		mui.toast('请输入正确的手机号',{ duration:'long', type:'div' })
	// 		return false;
	// 	}
	// }
	// if ($.trim($('#code').val()).length == 0) {
	// 		mui.toast('请输入短信验证码',{ duration:'long', type:'div' })
	// 		return false;
	// }
	if($('#mycheck1').attr('chec')==0){
		mui.toast('请同意用户注册协议',{ duration:'long', type:'div' })
		return false;
	}
	
	if($('#mycheck2').attr('chec')==0){
		mui.toast('请同意用户隐私保护政策',{ duration:'long', type:'div' })
		return false;
	}
	sessionStorage.setItem('entertime','1');
	location.href='../indexC.html';
	// $.ajax({
	// 	type: 'POST',
	// 	url: '#',
	// 	data: {
	// 		
	// 	},
	// 	success: function (data) {
	// 		console.log(data)
	// 	}
	// })
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
 
 
$('.checkboxContainer').click(function(){
	if(!$(this).hasClass('checkedBg')){
		$(this).addClass('checkedBg').removeClass('uncheckedBg')
		$(this).find('span').attr('chec',1)
	}else{
		$(this).removeClass('checkedBg').addClass('uncheckedBg')
		$(this).find('span').attr('chec',0)
	}
})