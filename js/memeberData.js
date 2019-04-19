$('.cancelIco').click(function () {
    $('.alertmodelcontainer').hide();
})

$('.filter a').click(function () {
    $('.alertmodelcontainer').show();
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

$(function () {
    // 按钮操作
    $('.header .btn').on('click', function () {
        var $this = $(this);
        if (!!$this.hasClass('lock')) {
            $this.attr('class', 'btn unlock');
            $this.text('解锁');
            // 锁定
            dropload.lock();
            $('.dropload-down').hide();
        } else {
            $this.attr('class', 'btn lock');
            $this.text('锁定');
            // 解锁
            dropload.unlock();
            $('.dropload-down').show();
        }
    });

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
        // loadUpFn: function (me) {
        //     $.ajax({
        //         type: 'GET',
        //         url: 'json/update.json',
        //         dataType: 'json',
        //         success: function (data) {
        //             var result = '';
        //             var arrLen = data.lists.length;
        //             for (var i = 0; i < arrLen; i++) {
        //                 result += '<tr>' +
        //                     '<td>' + data.lists[i].link + '</td>' +
        //                     '<td>' + data.lists[i].title + '</td>' +
        //                     '<td>' + data.lists[i].date + '</td>' +
        //                     '<td>' + data.lists[i].title + '</td>' +
        //                     '<td></td>' +
        //                     '</tr>'
        //             }
        //             // 为了测试，延迟1秒加载
        //             setTimeout(function () {
        //                 $('.lists').html(result);
        //                 // 每次数据加载完，必须重置
        //                 dropload.resetload();
        //             }, 1000);
        //         },
        //         error: function (xhr, type) {
        //             alert('Ajax error!');
        //             // 即使加载出错，也得重置
        //             dropload.resetload();
        //         }
        //     });
        // },
        loadDownFn: function (me) {
            $.ajax({
                type: 'GET',
                url: 'json/more.json',
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
                        $('.lists').append(result);
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
        }
    });
});