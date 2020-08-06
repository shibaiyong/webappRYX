

$(function () {

    // 页数
    var page = 0;
    // 每页展示5个
    var size = 5;

    // dropload
    var dropload = $('.inner').dropload({
        domUp: {
            domClass: 'dropload-up',
            domRefresh: '<div class="dropload-refresh">↓下拉刷新</div>',
            domUpdate: '<div class="dropload-update">↑释放更新</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
        },
        domDown: {
            domClass: 'dropload-down',
            domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">暂无数据</div>'
        },
        loadDownFn: function (me) {
            $.ajax({
                type: 'GET',
                url: 'json/more.json',
                dataType: 'json',
                success: function (data) {
                    var result = '';
                    //var arrLen = data.lists.length;
                    var arrLen = data.length;
                    if (arrLen > 0) {
                        for (var i = 0; i < arrLen; i++) {
                            result += '<tr>' +
                                '<td>' + data[i].id + '</td>' +
                                '<td>' + data[i].link + '</td>' +
                                '<td>' + data[i].date + '</td>' +
                                '<td>' + data[i].title + '</td>' +
                                '<td></td>' +
                                '</tr>'
                        }

                    } else {
                        // 锁定
                        me.lock();
                        // 无数据 
                        me.noData();
                        if (page == 0) {
                            //$('.dropload-down').hide();
                            dropload.resetload();
                        }
                    }

                    // 为了测试，延迟1秒加载
                    setTimeout(function () {
                        $('.wrapperr').append(result);
                        // 每次数据加载完，必须重置
                        //dropload.resetload();
                    }, 1000);
                },
                error: function (xhr, type) {
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    dropload.resetload();
                }
            });
        }
    });
});

//点击查询按钮

$('.cancelIco img').click(function (e) {
    $('.alertmodelcontainer').hide();
})

$('.opreatBtn .btn').click(function () {
    $(this).addClass('btnactivecolor').siblings().removeClass('btnactivecolor');
})

//提交表单数据

$('.compelet .btn').click(function () {
    var username = $('#bankname').val();
    var status = $('.btnactivecolor').attr('val');
    window.open('http://www.baidu.com');
})

$('.bankcardwrapper').click(function(){
    $('.alertmodelcontainer').show();
})

ajaxRequest({
    url: 'json/more.json',
    success: function (res) {
        
    },
    error: function (xhr, type) {
    }
})