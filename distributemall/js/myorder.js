mui('.bottombanner').on('tap','img',function(){
    var uid = $('#uid').val()
    window.location.href='/shop/partnerpost?uid='+uid;
})


mui('.footer').on('tap','dl',function(){

    var path = $(this).attr('route')
    if(path){
        window.location.href = path;
    }
})