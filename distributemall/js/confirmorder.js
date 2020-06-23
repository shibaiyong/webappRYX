document.getElementById('submitorder').addEventListener("tap",function () {
	mui('#popover2').popover('show');
})

mui('.mui-popover').on('tap','.alipay',function(){
	mui('#popover2').popover('hide');
	$('.indicatecontainer').show();
})

setTimeout(function(){
	$('.operatebtn').show()
},5000)


