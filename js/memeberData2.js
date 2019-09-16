$('.cancelIco').click(function(){
    $('.alertmodelcontainer').hide();
})

$('.filter a').click(function(){
    $('.alertmodelcontainer').show();
})

//提交表单数据

$('.compelet .btn').click(function(){
    var username = $('#username').val();
    var phone = $('#phone').val();
    window.open('http://www.baidu.com');
})

    
//$('.dropload-down').hide();

// 页数
var page = 0;
// 每页展示5个
var size = 5;

// dropload
var dropload = $('.table1').dropload({
	
    scrollArea : window,
    loadDownFn : function(me){
        page++;
        // 拼接HTML
        var result = '';
        $.ajax({
            type: 'GET',
            url: 'http://ons.me/tools/dropload/json.php?page='+page+'&size='+size,
            dataType: 'json',
            success: function(data){
                var arrLen = data.length;
                if(arrLen > 0){
                    
                    for(var i=0; i<arrLen; i++){
                        result += '<tr>'+
                        '<td>'+data[i].id+'</td>'+
                        '<td>'+data[i].link+'</td>'+
                        '<td>'+data[i].date+'</td>'+
                        '<td>'+data[i].title+'</td>'+
                        '<td></td>'+
                    '</tr>'
                    }
                }else{
                    // 锁定
                    me.lock();
					
                    // 无数据 
                    me.noData();
                    if( page > 1 ){
                        $('.dropload-down').hide();
                    }
                }
                // 为了测试，延迟1秒加载
                setTimeout(function(){
                    // 插入数据到页面，放到最后面
                    $('.lists').append(result);
                    // 每次数据插入，必须重置
                    me.resetload();
                },1000);
            },
            error: function(xhr, type){
                //alert('Ajax error!');
                // 即使加载出错，也得重置
                me.resetload();
            }
        });
    }
});

