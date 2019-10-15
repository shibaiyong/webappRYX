var bankList = [
	{
		bankLogo:'../img/PuFa.png'
	},
]

var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
		direction : 'vertical',
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
    }
  })