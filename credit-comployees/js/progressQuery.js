
$('.cardstatus span').click(function(){
	$(this).addClass('bottomline').siblings().removeClass('bottomline')
	
		//$('.statuslist').load('checking.html .bankcardinfo')
		
		$.get('checking.html',function(data){
			$(".statuslist").html(data);
		})

		
	// 	$.ajax({
	// 		url:'checking.html',
	// 		type:'get',
	// 		success:function(res){
	// 			console.log($(res))
	// 			console.log($('.statuslist').append($(res)))
	// 		}
	// 	})
	// 
})