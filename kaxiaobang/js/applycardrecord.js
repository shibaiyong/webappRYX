

$(function () {

    // 页数
    var page = 1;
    // 每页展示5个
    var size = 5;
    //var dropload = $('.inner').dropload({
    var inner = document.querySelector('.inner')
    //var dropload = CreateDropLoad(inner,{
    // dropload
    var dropload = CreateDropLoad(inner,{
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
        loadUpFn: function (me) {
            $.ajax({
                type: 'GET',
                url: 'json/update.json',
                dataType: 'json',
                success: function (data) {
                    var result = '';
                    var arrLen = data.lists.length;
                    for (var i = 0; i < arrLen; i++) {
                        result += '<tr>' +
                            '<td>' + data.lists[i].link + '</td>' +
                            '<td>' + data.lists[i].title + '</td>' +
                            '<td>' + data.lists[i].date + '</td>' +
                            '<td>' + data.lists[i].title + '</td>' +
                            '<td></td>' +
                            '</tr>'
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function () {
                        $('.wrapperr').html(result);
                        // 每次数据加载完，必须重置
                        dropload.resetload();
                    }, 1000);
                },
                error: function (xhr, type) {
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    dropload.resetload();
                }
            });
        },
        loadDownFn: function (me) {
            $.ajax({
                type: 'GET',
                url: 'json/more.json',
                dataType: 'json',
                success: function (data) {
                    var result = '';
                    var arrLen = data.lists.length;
                    //var arrLen = data.length;
                    if (arrLen > 0) {
                        for (var i = 0; i < arrLen; i++) {
                            result += '<tr>' +
                                '<td><img src="'+data.lists[i].pic+'"></td>' +
                                '<td>' + data.lists[i].link + '</td>' +
                                '<td>' + data.lists[i].date + '</td>' +
                                '<td>' + data.lists[i].title + '</td>' +
                                '<td></td>' +
                                '</tr>'
                        }
                        

                    } else {
                        // 锁定   它可以阻止请求，阻止继续加载数据
                        me.lock();
                        // 无数据 
                        me.noData();
                        if (page == 1) {
                            //$('.dropload-down').hide();
                            //它可以阻止请求，阻止继续加载数据
                            dropload.resetload();
                        }
                    }

                    // 为了测试，延迟1秒加载
                    setTimeout(function () {
                        
                        $('.wrapperr').append(result);
                        //每次数据加载完，必须重置。
                        //他会改变me.loading属性，一次来判断是否可以再次加载数据。他可以释放被截断的请求。
                        dropload.resetload();
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