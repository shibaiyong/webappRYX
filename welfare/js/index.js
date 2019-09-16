var datas = [{
			tagName: 'gongshang',
			title: '工商银行ETC在线办卡',
			regions: [{
				name: '北京',
				link: 'https://biz.icbc.zzdtech.com/etc.html#!etcwebapply?no=0031020015142',
				twocode:''
			}, {
				name: '深圳',
				link: 'https://lnk0.com/QRpgwd',
				twocode:''
			},{
				name: '重庆',
				link: '#',
				twocode:'gscqCode'
			},
			{
				name: '其他地区',
				link: '#',
				twocode:'gsqtCode'
			}]
		},
		{
			tagName: 'jianshe',
			title: '建设银行ETC在线办理',
			regions: [{
				name: '广东',
				link: 'https://epay.96533.com:3843/mca/wap/olapcrd/login.html?h5_channel=SZBRANCH&empNo=44200002577c19920',
				twocode:''
			},
			{
				name: '其他',
				link: 'https://shanghaietc.mobi88.cn/index.php/Index/index/staff_no/dezh0074.html?staff_no=dezh0074',
				twocode:''
			}
			]
		},
		{
			tagName: 'nongye',
			title: '农业银行ETC在线办理',
			regions: [{
				name: '全国',
				link: 'https://merch.szx.abchina.com/qmall/index?token=nbe1496912830836#transactETC?salertoken=0732D19BCE644A6F8671949116D63997&YXB=YXB',
				twocode:''
			}]
		}
	]
	// js添加点击事件跳转
	linkto()

	function linkto() {
		var dls = document.getElementsByTagName('dl')
		for (let i = 0; i < dls.length; i++) {
			dls[i].onclick = function() {
				var alink = this.getAttribute('alink')
				if (alink) {
					window.location.href = alink
				}
			}
		}
	}
	showRelativeModel()

	function showRelativeModel() {
		$('.recommendbank-item').click(function() {
			var tagName = $(this).attr('tagName')
			if(tagName == 'jiaotong'){
				//window.location.href="#"
				return false
			}
			for (var j = 0; j < datas.length; j++) {
				if (tagName == datas[j].tagName) {
					var str = ''
					for (var d = 0; d < datas[j].regions.length; d++) {
						var twocode = datas[j].regions[d].twocode
						str += `<button a=${datas[j].regions[d].link} twocode=${twocode}>${datas[j].regions[d].name}</button>`
					}
					$('.alertmodelcontainer .regions').html(str)
					$('.alertmodelcontainer .alert-title').text(datas[j].title)
					$('.alertmodelcontainer').show()
				}
			}
		})
	}

	$('.alertmodelcontainer .complete button').click(function() {
		$('.alertmodelcontainer').hide()
	})

	$('body').on('click', '.alertModel .regions button', function() {
		var link = $(this).attr('a')
		var twocode = $(this).attr('twocode')
		if(twocode){
			window.location.href = 'ETC.html'
			localStorage.setItem('twocode',twocode)
		}else{
			window.location.href = link
		}
	})
	
	//初始化swiper
	
	var mySwiper = new Swiper ('.swiper-container', {
    //loop: true, // 循环模式选项
  })