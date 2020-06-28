mui('.footer').on('tap','dl',function(){

    var path = $(this).attr('route')
    if(path){
        window.location.href = path;
    }
})