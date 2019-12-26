var SwiperAlertBanner;
var SwiperBanner = new Swiper ('.swiper-banner', {
    //loop: true, // 循环模式选项
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true
    },
		pagination: {
			el: '.swiper-pagination',
		}
  })
	
	
	var SwiperNotice = new Swiper ('.swiper-notice .swiper-container', {
	    loop: true, // 循环模式选项
			direction : 'vertical',
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: true,
	    }
	  })

if(sessionStorage.getItem('entertime')=='1'||!sessionStorage.getItem('entertime')){
	$('.showtoastcontainer').show()
	SwiperAlertBanner = new Swiper ('.swiper-alert', {
		//loop: true, // 循环模式选项
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true
		},
		pagination: {
			el: '.swiper-pagination'
		}
	})
	sessionStorage.setItem('entertime',2)
}else{
	if(SwiperAlertBanner){
		SwiperAlertBanner.destroy(true,true);
	}
	$('.showtoastcontainer').hide();
}

// $('.asideIco').click(function(){
// 	$('.showtoastcontainer').show()
// 	SwiperAlertBanner = new Swiper ('.swiper-alert', {
// 		//loop: true, // 循环模式选项
// 		autoplay: {
// 			delay: 3000,
// 			stopOnLastSlide: false,
// 			disableOnInteraction: true
// 		},
// 		pagination: {
// 			el: '.swiper-pagination',
// 		}
// 	})
// })

$('.closeicon img').click(function(){
	SwiperAlertBanner.destroy(true,true);
	$('.showtoastcontainer').hide()
})

$('.asideIco').click();
	
	
	//带边界检测 移动端实现
	var flag = true;
	var touchStart_x = null,touchStart_y = null,touchMove_x = null,touchMove_y = null,boxStartX=null,boxStartY=null;
	$(".asideIco").on("touchstart",function(e){
		
		touchStart_x = e.targetTouches[0].pageX;
		touchStart_y = e.targetTouches[0].pageY;
		boxStartX = $(".asideIco").position().left;
		boxStartY = $(".asideIco").position().top;
	})
	document.body.addEventListener('touchmove', function (e) {
		if(!flag){
			e.preventDefault();
		}
		},{passive: false});
	$(".asideIco").on("touchend",function(e){
		flag = true
	})
	$(".asideIco").on("touchmove",function(e){
		 flag = false
			touchMove_x = e.targetTouches[0].pageX-touchStart_x;
			touchMove_y = e.targetTouches[0].pageY-touchStart_y;
			var left = boxStartX + touchMove_x;
			var top = boxStartY + touchMove_y;
			var maxLeft = $(window).width()-$(".asideIco").width();
			var maxTop = $(window).height()-$(".asideIco").height();
			if(left <=0 ){
				left = 0
			}
			if(left >= maxLeft){
				left = maxLeft
			}
			if(top <=0 ){
				top = 0
			}
			if(top >= maxTop){
				top = maxTop
			}
			$(".asideIco").css({
					left:left,
					top:top
			})
	})

$('.hotbankcontent').on('click','.bankitem',function(){
	var linkto = $(this).attr('linkto')
	var bank_id = $(this).attr('bank_id')
	sessionStorage.setItem('bank_id',bank_id)
	window.location.href = linkto
})

$('.buttoncontainer span').click(function(){
	var linkto = $(this).attr('linkto')
	window.location.href=linkto
})
	
	
	