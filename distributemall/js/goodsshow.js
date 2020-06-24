
var uid = $('#uid').val();

var goods_id = $('#goods_id').val();
var pid = $('#pid').val();
document.getElementById('immediatebuy').addEventListener("tap",function () {
	if($(this).hasClass('disabled')){
		return false;
	}
	$.ajax({
		type:"get",
		url:"/goods/user_status",
		data:{uid,goods_id,pid},
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.code==1){
				mui('#popover').popover('show')
			}else{
				window.location.href="/Auth/login?re_url=6&goods_id="+data.goods_id+'&pid='+data.pid
			}
		},
		error:function(jqXHR){
		}
	});

})

document.getElementById('sharemoney').addEventListener("tap",function () {
	if($(this).hasClass('disabled')){
		return false;
	}
	$.ajax({
		type:"get",
		url:"/goods/share",
		data:{uid,goods_id,pid},
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.code==1){
			 	window.location.href="/Shop/partnerpost?uid="+data.uid
			}else if(data.code==3){
			 	window.location.href="/Shop/partnerpost?uid="+data.uid
			 }else{
			 	window.location.href="/Auth/login?re_url=6&goods_id="+data.goods_id+'&pid='+data.pid
			 }
		},
		error:function(jqXHR){
		}
	});

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

document.getElementById('service').addEventListener("tap",function () {
	mui('#popover2').popover('show')
})

mui('#popover2').on('tap','.mybtn',function(){
	mui('#popover2').popover('hide')
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
var endTimeText = $('.countdown').val();
var endTimeDate = new Date(endTimeText);
var timeinterval;
function gameOver(){

	var endTimes = endTimeDate.getTime()-new Date().getTime();
	if(endTimes<=0){
		clearInterval(timeinterval);
		$('.countdown strong').text('00天'+'00:'+'00');
		return;
	}

	var day = parseInt(endTimes/3600/1000/24);
	var hour = parseInt(endTimes/3600/1000%24);
	var minutes = parseInt((endTimes-day*24*3600*1000-hour*3600*1000)/1000/60);
	var secons = parseInt((endTimes-day*24*3600*1000-hour*3600*1000-minutes*1000*60)/1000);
	var hour = hour < 10 ? "0"+hour : hour;
	var minutes = minutes < 10 ? "0"+minutes : minutes;
	var secons = secons < 10 ? "0"+secons : secons;
	if(day==0&&minutes==0&&secons==0){
		$('.buttoncontainer span').addClass('disabled');
	}

	$('.countdown strong').text(day+'天'+hour+':'+minutes+':'+secons);

}

var timeinterval = setInterval(function(){
	gameOver();
},1000)

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


$('#nextstep').click(function () {
	var data='';
	var flag  = true;
	mui("#popover input").each(function () {
		//若当前input为空，则alert提醒
		if(!this.value||$.trim(this.value)==""){
			var label = this.previousElementSibling;
			mui.toast(label.innerText+"不允许为空",{ duration:'long', type:'div' })
			flag = false;
			return false;
		}
		data += '&' + this.name + '=' + this.value;
	});
	if(!flag){
		return false;
	}
	data += '&goods_id=' + goods_id;
	data += '&uid=' + uid;

	data = data ? data.substring(1) : ''

	window.location.href="/shop/affirm_order?"+data
})



// mui.alert('表示已申请的信用卡正在 ','审批中','我知道了',null,'div')