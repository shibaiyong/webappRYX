var type = getQueryString('type');
$('.custominfo .searcharea label').click(function(){
	var type = $('.bottomline').attr('type');
	var phone = $('.search').val() || '';
	$.ajax({
		url:'userlist_api',
		type:'post',
		data:{
			phone,
			type
		},
		success:function(res){
			var str = '';
			if(res.code == 2){
				var data = res.data;
				for(var i = 0; i < data.length; i++){
					str += `<tr><td>${data[i].name}</td><td>${data[i].phone}</td><td>${data[i].created_at}</td></tr>`
				}
				$('.statuslist table').show();
				$('.nodataContainer').hide();
			}else if(res.code ==1){
				str +=`<div class="nodataContainer"><img class="nodata" src="/Public/Home/newkxb/img/nodata.png">
									<div class="nodataText">暂无数据</div></div>`
				$('.statuslist table').hide();
				$('.statuslist .nodataContainer').remove();
				$('.statuslist').append(str);

			}
			$('.statuslist tbody').html(str)
		}
	})

})

$('.cardstatus span').click(function(){
	$(this).addClass('bottomline').siblings().removeClass('bottomline');
	var type = $(this).attr('type');
	var phone = $('.search').val() || '';
	$.ajax({
		url:'userlist_api',
		type:'post',
		data:{
			phone,
			type
		},
		success:function(res){
			var str = '';
			if(res.code == 2){
				var data = res.data;
				for(var i = 0; i < data.length; i++){
					str += `<tr><td>${data[i].name}</td><td>${data[i].phone}</td><td>${data[i].created_at}</td></tr>`
				}
				$('.statuslist table').show();
				$('.nodataContainer').hide();
			}else if(res.code ==1){
				str +=`<div class="nodataContainer"><img class="nodata" src="/Public/Home/newkxb/img/nodata.png">
									<div class="nodataText">暂无数据</div></div>`

				$('.statuslist table').hide();
				$('.statuslist .nodataContainer').remove();
				$('.statuslist').append(str);
			}
			$('.statuslist tbody').html(str)
		}
	})

})
initCustomStatus()

function initCustomStatus(){
	setTimeout(function(){
		$(".cardstatus span").eq(type-1).click();
	},0)
}





function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}