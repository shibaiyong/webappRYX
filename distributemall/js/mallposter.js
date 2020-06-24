mui('body').on('tap','.order',function(){
    var ad_id = $(this).attr('ad_id');
    var uid = $('#uid').val();
    window.location.href='/Shop/code_qr?uid='+uid+'&ad_id='+ad_id;
})
mui('.footer').on('tap','dl',function(){

    var path = $(this).attr('route')
    if(path){
        window.location.href = path;
    }
})