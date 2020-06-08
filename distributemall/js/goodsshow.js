




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


// mui.alert('表示已申请的信用卡正在 ','审批中','我知道了',null,'div')