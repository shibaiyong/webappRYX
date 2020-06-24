var login_uid = $.trim($('.login_uid').val());
$('.item-list li').click(function(){
	var tagName = $(this).attr('tag')
	window.location.href="helpdetail.html?tagName=" + tagName+'&login_uid='+login_uid
})