$('.carddata').on('click','.widthdrawable',function(){
    var uid = $.trim($('.login_uid').val());
    var money = $(this).attr('money');
    window.location.href='/shop/withdraw_page?withdraw_money='+money+'&uid='+uid
})

$('.operatebtn').on('click','.mybtn',function(){
    var uid = $.trim($('.login_uid').val());
    window.location.href='/Shop/mallposter?uid='+uid
})


$('.item-list ul li').click(function(){
    var uid = $.trim($('.login_uid').val());
    var path = $(this).attr('path');
    if(path){
        window.location.href =  path + '?uid='+uid;
    }
})

mui('.footer').on('tap','dl',function(){

    var path = $(this).attr('route')
    if(path){
        window.location.href = path;
    }
})