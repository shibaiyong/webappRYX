initFooter();

$('.footercontainer dl').click(function(){
	var tag = $(this).attr('tag');
	var linkto = $(this).attr('linkto');
	sessionStorage.setItem('tag',tag);
	if(linkto){
		window.location.href = linkto;
	}
})

function initFooter(){
	var tag = sessionStorage.getItem('tag');
	$('.footercontainer dl').each(function(index, item){
		if(!tag && index == 0){
			$(item).find('.activeImg').show();
			$(item).find('.disableImg').hide();
			$(item).find('dd').addClass('chooseActive');
		}else if( $(item).attr('tag') == tag ){
			$(item).find('.activeImg').show();
			$(item).find('.disableImg').hide();
			$(item).find('dd').addClass('chooseActive');
		}else{
			$(item).find('.activeImg').hide();
			$(item).find('.disableImg').show();
			$(item).find('dd').removeClass('chooseActive');
		}
	})
}