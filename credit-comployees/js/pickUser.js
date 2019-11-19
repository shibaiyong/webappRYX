$(".users span:not('.addbtn')").click(function(){
	var userchecked = $(this).hasClass('userchecked');
	if(userchecked){
		return false;
	}else{
		
		$(this).addClass('userchecked').siblings('span').removeClass('userchecked')
	}
	
	$.ajax({
		type:"POST",
		url:"#",
		data:{},
		dataType:"json",
		success:function(data){
			
		},
		error:function(jqXHR){}
	})
})

$('.addbtn').click(function(){
	
})