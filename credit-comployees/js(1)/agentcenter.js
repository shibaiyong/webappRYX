$('.agentcenter .menu dl').click(function(){
    var linkto = $(this).attr('linkto');
    if(
        linkto == 'progressquery'){
        sessionStorage.setItem('tag','2')
    }
    if(linkto){
        window.location.href=linkto
    }
})

$('.carddata').on('click','.widthdrawable',function(){
    var money = $(this).attr('money');
    window.location.href='withdraw_page?withdraw_money='+money
})


$('.item-list').on('click','li',function(){
    var linkto = $(this).attr('linkto');
    window.location.href=linkto;
})