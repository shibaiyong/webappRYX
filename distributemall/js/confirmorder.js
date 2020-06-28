

mui('.buttonwrapper').on('tap','.submitorder',function(){
	var data={};
	mui('input').each(function(){
		data[this.name]=this.value;
	})
	if($("input[name='leave_word']").val().length>50){
		mui.toast('50字以内',{ duration:'long', type:'div' })
		return;
	}
	$.ajax({
		type:"get",
		url:"/shop/addorder",
		data:data,
		dataType:"json",
		success:function(data){

		},
		error:function(jqXHR){
		}
	});
})


document.getElementById('submitorder').addEventListener("tap",function () {
	mui('#popover2').popover('show')
})

mui('.mui-popover').on('tap','.mybtn',function(){
	mui('#popover2').popover('hide')
})