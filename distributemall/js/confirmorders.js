
var order_num;
mui('.buttonwrapper').on('tap','.submitorder',function(){
	var that = $(this);
	if($(this).hasClass('disabled')){
		return false;
	}
	if($("input[name='leave_word']").val().length>50){
		mui.toast('50字以内',{ duration:'long', type:'div' })
		return false;
	}else if($("input[name='leave_word']").val().length==0){


	}else{
		if(!/^[\u4e00-\u9fa5\d]{1,}$/.test($("input[name='leave_word']").val())){
			mui.toast('请输入汉字和数字',{ duration:'long', type:'div' })
			return false;
		}
	}
	
	mui('#popover2').popover('show');
	$(this).addClass('disabled')
	var data={};
	mui('input').each(function(){
		data[this.name]=this.value;
	})
	
	$.ajax({
		type:"get",
		url:"/Shop/addorder",
		data:data,
		dataType:"json",
		success:function(data){
			if(data.code=='1'){
				order_num = data.order_num;
				setTimeout(function(){
					that.removeClass('disabled')
				},8000)
			}
		},
		error:function(jqXHR){
		}
	});
})

mui('.mui-popover').on('tap','.alipay',function(){
	mui('#popover2').popover('hide');
	var money = $('#money').val();
	var goods_id = $('#goods_id').val();
	location.href=`/Payment/pay?WIDout_trade_no=${order_num}&WIDsubject=教育商城&WIDtotal_amount=${money}&goods_id=${goods_id}`
})

setTimeout(function(){
	$('.operatebtn').show()
},5000)