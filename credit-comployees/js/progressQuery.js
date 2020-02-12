
$('.cardstatus span').click(function(){
	$(this).addClass('bottomline').siblings().removeClass('bottomline')

	$.get('checking.html',function(data){
		$(".statuslist").html(data);
	})
})



mui.alert('表示已申请的信用卡正在 ','审批中','我知道了',null,'div')