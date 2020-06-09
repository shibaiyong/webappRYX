document.getElementById('submitorder').addEventListener("tap",function () {
	mui('#popover2').popover('show')
})

mui('.mui-popover').on('tap','.mybtn',function(){
	mui('#popover2').popover('hide')
})