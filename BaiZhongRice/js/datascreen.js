mui.init();

//打开日期选择器
mui('.timeinput').each(function(index,item){
	item.addEventListener('tap', function( e ){
		item.dtPicker = new mui.DtPicker({
			type: "date",//设置日历初始视图模式 
			beginDate: new Date(2015, 01, 01),//设置开始日期 
			endDate: new Date(3000, 12, 31),//设置结束日期 
			labels: ['年', '月', '日']//设置默认标签区域提示语 
		});
		item.dtPicker.show(function( res ) { 
			// 选中之后给表单赋值
			item.value = res.value;
		})
	})
})