mui.init();

//打开日期选择器
mui('.cardstatus input').each(function(index, item) {
	item.addEventListener('tap', function(e) {
		item.PopPicker = new mui.PopPicker();
		item.PopPicker.setData([{
			value: "first",
			text: "全部"
		}, {
			value: "second",
			text: "申请中"
		}, {
			value: "third",
			text: "审批通过"
		}, {
			value: "fourth",
			text: "审批拒绝"
		}])
		item.PopPicker.show(function(SelectedItem) {
			item.value = SelectedItem[0].text;
		})
	})
})
