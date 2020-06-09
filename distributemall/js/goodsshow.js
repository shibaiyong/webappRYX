

document.getElementById('immediatebuy').addEventListener("tap",function () {
	mui('#popover').popover('show')
})

mui('.relifeshow').on('tap','.mui-icon-close',function(){
	mui('#popover').popover('hide')
})

document.getElementById('explain').addEventListener("tap",function () {
	mui('#popover1').popover('show')
})

mui('#popover1').on('tap','.mybtn',function(){
	mui('#popover1').popover('hide')
})

$('.add').click(function(){
	var val = $(this).prev().val();
	if(val){
		$(this).prev().val(++val);
	}else{
		$(this).prev().val(1);
	}
})

$('.decline').click(function(){
	var val = $(this).next().val();
	if(val&&val>1){
		$(this).next().val(--val);
	}else{
		$(this).next().val(1);
	}
})

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


// mui.alert('表示已申请的信用卡正在 ','审批中','我知道了',null,'div')