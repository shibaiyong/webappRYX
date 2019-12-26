$('.performereview .single dl dd').click(function(){
    var linkto = $(this).attr('linkto');
    var type = $(this).attr('type');
    var status = $(this).attr('status') || '';
    var is_time = $(this).attr('is_time') || 0;
    if(linkto == 'progressquery'){
        sessionStorage.setItem('tag','2')
    }
    window.location.href = linkto + '?type=' + type + '&status='+status + '&is_time=' + is_time;

})