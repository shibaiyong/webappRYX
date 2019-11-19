$('.totaldatainfo a').click(function(){
    //location.href = 'screeninvite';
    document.getElementById("inner1").style.display = "none";
    document.getElementById("datascreen").style.display = "";
})
// dropload
var page = 0;
var agentid = $('#agentid').val();
var bankid = $('#bankid').val();
var pid = $('#pid').val();
var status = $('#status').val();
var openid = $('#openid').val();
var starttimes = $('#starttimes').val();
var endtime = $('#endtime').val();
var size =5;
var dropload = $('.inner1').dropload({
    scrollArea : window,
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
        page++;
        var result = '';
        var data = {
            page : page,
            agentid : agentid,
            pid : pid,
            status : status,
            bankid : bankid,
            openid : openid,
            starttime:starttimes,
            endtime:endtime
        }
        $.ajax({
            type: 'post',
            url: 'ajaxinvite',
            dataType: 'json',
            data:data,
            success: function (res) {
                var data = res.data;
                var result = '';
                var arrLen = res.data.length;
                $('.totaldatainfo .num').text(res.num);
                if(arrLen>0){
                    for (var i = 0; i < arrLen; i++) {
                        var color = '';
                        if(data[i].status =='已建档'){
                            color = '#4E59E2'
                        }else if(data[i].status =='审核中'){
                            color = '#4E59E2'
                        }else if(data[i].status =='审核通过'){
                            color = '#26AC5F'
                        }else{
                            color = '#DB4612'
                        }
                        result += `
                            <div class="bankcardinfo">
                                <ul class="bankmemeber">
                                    <li><span>${data[i].bank_name}</span>&nbsp;/&nbsp;<span>${data[i].name}</span></li>
                                    <li><span>办卡时间</span>:&nbsp;<span>${data[i].create_at}</span></li>
                                </ul>
                                <ul class="bankstatus">
                                    <li><span style="color:${color}">${data[i].status}</span></li>
                                </ul>
                            </div>`
                    }
                }else{
                    // 锁定
                    me.lock();
                    me.noData();
                    if (page>1) {
                        $('.dropload-down').hide();
                    }
                }

                // 为了测试，延迟1秒加载
                $('.carddata').append(result);
                // 每次数据加载完，必须重置
                dropload.resetload();

            },
            error: function (xhr, type) {
                alert('Ajax error!');
                // 即使加载出错，也得重置
                dropload.resetload();
            }
        });
    }
});