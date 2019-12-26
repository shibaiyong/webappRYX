$('.item-list li').click(function(){
	var tagName = $(this).attr('tag')
	window.location.href="helpdetail.html?tagName=" + tagName
})