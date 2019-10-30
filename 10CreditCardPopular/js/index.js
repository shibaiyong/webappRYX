

var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
		direction : 'vertical',
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
    }
  })

$('.activeRules').click(function(){
	$('.showtoastcontainer').show();
})

$('.closeicon').click(function(){
	$('.showtoastcontainer').hide();
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