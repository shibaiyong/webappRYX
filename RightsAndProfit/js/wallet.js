mui.init();

//打开选择器
// mui('.cardstatus input').each(function(index, item) {
// 	item.addEventListener('tap', function(e) {
// 		item.PopPicker = new mui.PopPicker();
// 		item.PopPicker.setData([{
// 			value: "first",
// 			text: "1月"
// 		}, {
// 			value: "second",
// 			text: "2月"
// 		}, {
// 			value: "third",
// 			text: "3月"
// 		}, {
// 			value: "fourth",
// 			text: "4月"
// 		}, {
// 			value: "fourth",
// 			text: "5月"
// 		}, {
// 			value: "fourth",
// 			text: "6月"
// 		}, {
// 			value: "fourth",
// 			text: "7月"
// 		}, {
// 			value: "fourth",
// 			text: "8月"
// 		}, {
// 			value: "fourth",
// 			text: "9月"
// 		}, {
// 			value: "fourth",
// 			text: "10月"
//         }
//         , {
// 			value: "fourth",
// 			text: "11月"
// 		}, {
// 			value: "fourth",
// 			text: "12月"
// 		}])
// 		item.PopPicker.show(function(SelectedItem) {
// 			item.value = SelectedItem[0].text;
// 		})
// 	})
// })

//打开日期选择器

mui('.timeinput').each(function(index,item){

    item.dtPicker = new mui.DtPicker({
        type: "month",//设置日历初始视图模式 
        beginDate: new Date(2015, 01, 01),//设置开始日期 
        endDate: new Date(3000, 12, 31),//设置结束日期 
        labels: ['年', '月']//设置默认标签区域提示语
    });
    var date = new Date();
    item.value = date.getMonth()*1 + 1 >= 10 ? date.getMonth()*1 + 1 : '0' + (date.getMonth() * 1 + 1)
	item.addEventListener('tap', function( e ){
		item.dtPicker.show(function( res ) {
			// 选中之后给表单赋值
            item.value = res.m.value;
		})
	})
})