$('.ordernum strong').click(function(){
    var txt = $(this).prev().text();
    copyText(txt).then(function(){
      mui.toast('复制成功',{ duration:1500, type:'div' })
    });
})

mui('.operatebtn').on('tap','.mybtn',function(){

    var path = $(this).attr('route')
    window.location.href="/goods/index"
})
