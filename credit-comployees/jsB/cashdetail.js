$('.cardstatus span').click(function(){
	
	$(this).addClass('bottomline').siblings().removeClass('bottomline')
	
})


var withdrawmoney = $('.withdrawmoney').val();
var dotmoney = withdrawmoney.split('.')[1];
if(!dotmoney){

}else if( dotmoney.length > 2 ){
	
}