$('.sharecopy').click(function(){
    var txt = $(this).parent().prev().text();
    copyText(txt).then(function(){
      mui.toast('复制成功',{ duration:1500, type:'div' })
    });
})