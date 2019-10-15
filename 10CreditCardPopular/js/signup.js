


$('.signup').click(function(){
	var ifMobile = /^[1][3456789][0-9]{9}$/;
	var idcard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
	var isname = /^[\u4e00-\u9fa5]{2,4}$/;
	var name = $('.username')
	var phone = $('.phone')
	var id_card = $('.idcard')
	// if(!ifMobile.test(phone.val())){
	// 	phone.parent().next().css('visibility','visible');
	// 	return false;
	// }else{
	// 	phone.parent().next().css('visibility','hidden');
	// }
	// 
	// if(!idcard.test(id_card.val())){
	// 	id_card.parent().next().css('visibility','visible');
	// 	return false;
	// }else{
	// 	id_card.parent().next().css('visibility','hidden');
	// }
	$.ajax({
		url:'http://manage02.bzqmall.com.cn/api/activity/skip?id=3',

		data:{
			name: name.val(),
			phone: phone.val(),
			id_card: id_card.val()
		},
		success:function(res){
			if(res.code == 2){
				$('.showtoastcontainer').show().find('span').text('恭喜您报名成功')
			}else if(res.code == 1){
				$('.showtoastcontainer').show().find('span').text('已报名')
			}else if(res.code==4){
				$('.showtoastcontainer').show().find('span').text('您的报名次数已用完')
			}else{
				$('.showtoastcontainer').hide()
			}
		}
	})
})


