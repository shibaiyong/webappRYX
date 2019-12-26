var datas = [{
				tagName: '1',
				title: '什么是卡小邦？',
				content:'哈哈哈哈哈啦啦啦啦啦哈哈哈哈哈哈啦啦啦啦啦啦'
			}, {
				tagName: '2',
				title: '什么是卡小邦？',
				content:'哈哈哈哈哈啦啦啦啦啦哈哈哈哈哈哈啦啦啦啦啦啦'
			},{
				tagName: '3',
				title: '什么是卡小邦？',
				content:'哈哈哈哈哈啦啦啦啦啦哈哈哈哈哈哈啦啦啦啦啦啦'
			},{
				tagName: '4',
				title: '什么是卡小邦？',
				content:'哈哈哈哈哈啦啦啦啦啦哈哈哈哈哈哈啦啦啦啦啦啦'
			}
		]
		


var tagName = getQueryString('tagName')

for (var j = 0; j < datas.length; j++) {
	if (tagName == datas[j].tagName) {
		$('.item-container').text(datas[j].content)
		$('.introduce').text(datas[j].title)
	}
}

function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}