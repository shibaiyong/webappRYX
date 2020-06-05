
mui('.cardstatus').on('tap','span',function(){
	$(this).addClass('bottomline').siblings().removeClass('bottomline')
})

mui('.mui-off-canvas-wrap').on('tap','.mui-icon-close',function(){
	mui('.mui-off-canvas-wrap').offCanvas('close');
})


mui('.cardstatus').on('tap','.asidemenu',function(){
	mui('.mui-off-canvas-wrap').offCanvas('show');
})


// mui.alert('表示已申请的信用卡正在 ','审批中','我知道了',null,'div')