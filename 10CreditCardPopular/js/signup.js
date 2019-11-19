
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
		direction : 'vertical',
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
    }
  })


$('.signup').click(function(){
	var ifMobile = /^[1][3456789][0-9]{9}$/;
	var idcard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
	var isname = /^[\u4e00-\u9fa5]{2,4}$/;
	var name = $('.username')
	var phone = $('.phone')
	var id_card = $('.idcard')
	if(!ifMobile.test(phone.val())){
		phone.parent().next().css('visibility','visible');
		return false;
	}else{
		phone.parent().next().css('visibility','hidden');
	}

	if(!idcard.test(id_card.val())&&id_card.val()){
		id_card.parent().next().css('visibility','visible');
		return false;
	}else{
		id_card.parent().next().css('visibility','hidden');
	}
	$.ajax({
		url:'apply',
		type:'post',
		data:{
			name: name.val(),
			phone: phone.val(),
			id_card: id_card.val()
		},
		success:function(res){
			if(res.code == 2){
				$('.alertSignUp').show().find('span').text('恭喜您报名成功')
				$('.showtoast_footer button').attr('btnType','2')
			}else if(res.code == 1){
				$('.alertSignUp').show().find('span').text('已报名')
				$('.showtoast_footer button').attr('btnType','1')
			}else if(res.code==4){
				$('.alertSignUp').show().find('span').text('您的报名次数已用完,请稍后重试')
				$('.showtoast_footer button').attr('btnType','4')
			}else{
				$('.alertSignUp').hide()
			}
		}
	})
})

$('.showtoast_footer button').click(function(){
	var btnType = $(this).attr('btnType')
	if(btnType == 2){
		location.href="http://actives.bzqmall.com.cn/activity/bankactivity/banklist"
	}else{
		$('.alertSignUp').hide()
		return false;
	}
})

$('.activeRules').click(function(){
	$('.showtoastcontainer1').show();
})

$('.closeicon').click(function(){
	$('.showtoastcontainer').hide();
	$('.showtoastcontainer1').hide();
})

var isAndroid = window.navigator.userAgent.indexOf('Android') > -1;
  var isPhone = window.navigator.userAgent.indexOf('Phone') > -1;
  if( isAndroid ){
      $('.activeTime').css('top','1.8rem');
      $('.phonelist').css('top','2.15rem');
  }else if( isPhone ){
      $('.activeTime').css('top','2rem');
      $('.phonelist').css('top','2.4rem');
  }


