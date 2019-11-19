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
		disableOnInteraction: true
	}
})

initFooter();

$('.footercontainer dl').click(function(){
	var tag = $(this).attr('tag');
	var linkto = $(this).attr('linkto');
	var globalTag = sessionStorage.getItem('tag');
	sessionStorage.setItem('tag',tag);
	if(linkto && tag != globalTag ){
		window.location.href = linkto;
	}
})

function initFooter(){
	var tag = sessionStorage.getItem('tag');
	$('.footercontainer dl').each(function(index, item){
		if(!tag && index == 0){
			$(item).find('.activeImg').show();
			$(item).find('.disableImg').hide();
			$(item).find('dd').addClass('chooseActive');
		}else if( $(item).attr('tag') == tag ){
			$(item).find('.activeImg').show();
			$(item).find('.disableImg').hide();
			$(item).find('dd').addClass('chooseActive');
		}else{
			$(item).find('.activeImg').hide();
			$(item).find('.disableImg').show();
			$(item).find('dd').removeClass('chooseActive');
		}
	})
}



	
	
	