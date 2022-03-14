
$('.ordernum strong').click(function(){
    var txt = $(this).prev().text();
    copyText(txt,0,txt.length).then(function(){
        mui.toast('复制成功',{ duration:1500, type:'div' })
    });
})

mui('.operatebtn').on('tap','.myorderbtn',function(){
    var uid = $('#uid').val()
    window.location.href='/shop/order_list?uid='+uid;
})

mui('.bottombanner').on('tap','img',function(){
    var uid = $('#uid').val()
    window.location.href='/shop/partnerpost?uid='+uid;
})
