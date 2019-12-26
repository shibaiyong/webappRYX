var uid;
$(".users span:not('.addbtn')").click(function(){
	var userchecked = $(this).hasClass('userchecked');
	uid = $(this).attr('user_id');
	if(userchecked){
		return false;
	}else{
		
		$(this).addClass('userchecked').siblings('span').removeClass('userchecked')
	}
	
	$.ajax({
		type:"POST",
		url:"applyuserinfo",
		data:{uid},
		dataType:"json",
		success:function(data){
			for(var i in data){
				$("[tag='"+i+"']").text(data[i])
			}
		},
		error:function(jqXHR){}
	})
})

$(".mui-btn-primary").click(function(){
	var bank_id =  sessionStorage.getItem('bank_id') || getQueryString('bank_id');
	$.ajax({
		type:"POST",
		url:"applybank",
		data:{
			uid,
			bank_id
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			if(data.code==1){
				window.location.href=data.bank_url
			}
		},
		error:function(jqXHR){}
	})
})

function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}


setTimeout(function(){
	$(".users span:first-child").click();
},0)