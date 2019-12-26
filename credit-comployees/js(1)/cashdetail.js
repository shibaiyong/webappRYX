
var withdraw_money = getQueryString('withdraw_money') || 0;

$('.mybtn').click(function(){
	var money = $('.cash input').val();
	var last_dot = money.split('.')[1];
	console.log(last_dot)
	$.ajax({
		url: 'withdraw_api',
		type: 'post',
		data: {
			money,
			withdraw_money
		},
		success: function (res) {
			console.log(res)
			if(res.code == 1){
				mui.toast(res.msg,{ duration:'long', type:'div' })
			}else{
				window.location.href=`withdraw_result?card_bank_name=${res.data.card_bank_name}&card_number=${res.data.card_number}&money=${res.data.money}`
			}
		}
	})

})

function getQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}