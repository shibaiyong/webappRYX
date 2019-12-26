var is_time = getQueryString('is_time') || 0;

$('.progressquery .searcharea label').click(function(){
	var status = $('.bottomline').attr('status');
	var type = $('.type').val() || '';
	var phone = $('.search').val() || '';
	$.ajax({
		url:'api_progressquery',
		type:'post',
		data:{
			status,
			phone,
			type,
			is_time
		},
		success:function(res){
			var str = '';
			var processStatus = '待查询';
			if(res.code == 2){
				var data = res.data;
				for(var i = 0; i < data.length; i++){
					var is_spider = data[i].is_spider;
					var bankstatus ='';
					if(is_spider == 2){
						bankstatus = `<ul class="bankstatus">
											<li><span>进度查询</span></li>
										</ul>`
					}
					if(status == 3){
						bankstatus = '';
						processStatus = '审核通过'
					}else if( status == 4){
						bankstatus = '';
						processStatus = '审核拒绝'
					}
					str += `<div class="bankcardinfo">
            						<div class="bankcardtop">
                						<h4>${data[i].bank_name}</h4><span>${data[i].name}</span>
            						</div>
            						<div class="bankcardbottom">
                						<ul class="bankmemeber">

                    						<li><span>申请时间</span>:&nbsp;<span>${data[i].create_at}</span></li>
                    						<li><span>申请状态</span>&nbsp;:&nbsp;<a href="javascript:;">` + processStatus + `</a></li>
                						</ul>`
										+ bankstatus +
									`</div>
								</div>`
					if(i == 1 && res.img_list){

						str+=`<div class="bottomBg">
									  <a href="${res.img_list.url}"><img src="${res.img_list.img}"/></a>
									</div>`
					}
				}
			}else if(res.code ==1  &&  res.img_list){
				str +=`<img class="nodata" src="/Public/Home/newkxb/img/nodata.png">
								<div class="nodataText">暂无数据</div>
								<div class="bottomBg">
								  <a href="${res.img_list.url}"><img src="${res.img_list.img}"/></a>
								</div>`
			}else{
				str +=`<img class="nodata" src="/Public/Home/newkxb/img/nodata.png">
									<div class="nodataText">暂无数据</div>`
			}
			$('.bankcontainer').html(str)
		}
	})

})

$('.cardstatus span').click(function(){
	$(this).addClass('bottomline').siblings().removeClass('bottomline');
	var status = $(this).attr('status');
	var type = $('.type').val() || '';
	var phone = $('.search').val() || '';
		$.ajax({
			url:'api_progressquery',
			type:'post',
			data:{
				status,
				phone,
				type,
				is_time
			},
			success:function(res){
				var str = '';
				var processStatus = '待查询';
				if(res.code == 2){
					var data = res.data;
					for(var i = 0; i < data.length; i++){
						var is_spider = data[i].is_spider;
						var bankstatus ='';
						if(is_spider == 2){
							bankstatus = `<ul class="bankstatus">
											<li><span>进度查询</span></li>
										</ul>`
						}
						if(status == 3){
							bankstatus = '';
							processStatus = '审核通过'
						}else if( status == 4){
							bankstatus = '';
							processStatus = '审核拒绝'
						}
						str += `<div class="bankcardinfo">
            						<div class="bankcardtop">
                						<h4>${data[i].bank_name}</h4><span>${data[i].name}</span>
            						</div>
            						<div class="bankcardbottom">
                						<ul class="bankmemeber">

                    						<li><span>申请时间</span>:&nbsp;<span>${data[i].create_at}</span></li>
                    						<li><span>申请状态</span>&nbsp;:&nbsp;<a href="javascript:;">` + processStatus + `</a></li>
                						</ul>`
										+bankstatus+
									`</div>
								</div>`
						if(i == 1 && res.img_list){

							str+=`<div class="bottomBg">
									  <a href="${res.img_list.url}"><img src="${res.img_list.img}"/></a>
									</div>`
						}
					}
				}else if(res.code ==1  &&  res.img_list){
					str +=`<img class="nodata" src="/Public/Home/newkxb/img/nodata.png">
								<div class="nodataText">暂无数据</div>
								<div class="bottomBg">
								  <a href="${res.img_list.url}"><img src="${res.img_list.img}"/></a>
								</div>`
				}else{
					str +=`<img class="nodata" src="/Public/Home/newkxb/img/nodata.png">
									<div class="nodataText">暂无数据</div>`
				}
				$('.bankcontainer').html(str)
			}
		})

})

setTimeout(function(){
	var status = getQueryString('status');
	if(status == 3){
		$(".cardstatus span").eq(2).click();
	}else{
		$(".cardstatus span").eq(0).click();
	}

},0)



function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
