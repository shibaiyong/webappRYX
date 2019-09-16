

//日历组件初始化
$('.timeinput').each(function (index, item) {
    var elem = '#' + $(item).attr('id');
    laydate.render({
        elem: elem,
        done: function (value, date, endDate) {
            //主动让输入框失去焦点，去触发表单校验。跟日历插件本事无关;
            $(this.elem[0]).blur();
        }
    })

})

//表单校验

$("#dataform").validate({
    onsubmit: true,// 是否在提交是验证
    onkeyup: false,
    rules: {　　　　//规则
        memebername: {　　//要对应相对应的input中的name属性
            required: true
        },
        memeber: {
            required: true
        },
        endtime: {
            required: true
        },
        starttime: {
            required: true
        }
    },
    messages: {　　　　//验证错误信息
        memebername: {
            required: "用户名不能为空",
        },
        memeber: {
            required: "密码不能为空"
        },
        starttime: {
            required: "密码不能为空"
        },
        endtime: {
            required: "密码不能为空"
        }
    },
    submitHandler: function (form) { //通过之后回调
        $.ajax({
            url: "/data/json",
            type: "get",
            dataType: "json",
            data: {
                user: $(".username").val(),
                password: $(".password").val()
            },
            success: function (res) {

            },
            error: function (err) {

            }
        });
    },
    invalidHandler: function (form, validator) { return false; },
    errorPlacement: function (error, element) {
        error.appendTo(element.parent().find('.error-tip'))
    }
});

//echarts报表图-佰众阡陌年度数据报表

var option1 = {
    title: {
        text: '佰众米仓年度数据总表'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['代理商数量','员工数量','用户数量','发卡数量','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'代理商数量',
            type:'line',

            data:[120, 132, 101, 134, 90, 230, 210,210,0,210,0,210]
        },
        {
            name:'员工数量',
            type:'line',

            data:[220, 182, 191, 234, 290, 330, 310,234,1,1,234,182]
        },
        {
            name:'用户数量',
            type:'line',

            data:[150, 232, 201, 154, 190, 330, 410,1,1,232,190,201]
        },
        {
            name:'发卡数量',
            type:'line',
            data:[320, 332, 301, 334, 390, 330, 320,1,332,1,1,390]
        },
        {
            name:'搜索引擎',
            type:'line',
            data:[820, 932, 901, 934, 1290, 1330, 1320,1,1,1,1,1]
        }
    ]
}

//月度数据

var option2 = {
    title: {
        text: '佰众米仓月度数据总表'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['代理商数量','员工数量','用户数量','发卡数量','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'代理商数量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'员工数量',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'用户数量',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'发卡数量',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

//日数据

var option3 = {
    title: {
        text: '佰众米仓月度数据总表'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['代理商数量','员工数量','用户数量','发卡数量','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0时','1时','2时','3时','4时','5日','6时','7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
		
    },
    series: [
        {
            name:'代理商数量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'员工数量',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'用户数量',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'发卡数量',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

var myChart1 = echarts.init(document.getElementById('tabledata1'));
var myChart2 = echarts.init(document.getElementById('tabledata2'));
var myChart3 = echarts.init(document.getElementById('tabledata3'));

myChart1.setOption(option1)
myChart2.setOption(option2)
myChart3.setOption(option3)



