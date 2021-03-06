var bankList = {
	"common": [
		/**
		{
			"order": 4,
			"icon": "BoHai.jpg",
			"name": "渤海银行",
			"url": "https://web.u51.com/U51WenzhouCreditBankWebBiz/#/?bankId=92&entranceType=2&channelCode=sw_ryx_03&channel_wz=sw_ryx_03",		
			"recommends": [{
				"text": "力荐",
				"color": "#F44336"
			}],
			"time": "秒批，高额度",
			"limit": "终身免年费，随借随还",
			"tags": [{
				"text": "额度最高10万"
			}]
		},
		*/
		// {
		// 	"order": 8,
		// 	"icon": "ZhaoShang.png",
		// 	"name": "招商银行",
		// 	"url": "https://res.cc.cmbimg.com/itafront/taf/formapi/index.html#/login3/api3xxapphj/remote?dscontr=89&webAddress=N5700DJ2097263250001",
		// 	"recommends": [],
		// 	"time": "新户刷卡赢好礼",
		// 	"limit": "取现额度100%，每月首笔免费取现",
		// 	"tags": [{
		// 		"text": "积分永久有效"
		// 	}]
		// },
		
		{
			"order": 6,
			"icon": "GuangDa.png",
			"name": "光大银行",
			"url": "https://xyk.cebbank.com/cebmms/apply/ps/ud-card-list.htm?class=wxps&pro_code=FHTG023536SZ0029RYXZ",
			"recommends": [{
				"text": "大额度",
				"color": "#F44336"
			}],
			"time": "10元惠生活，看大片、品美食、洗靓车",
			"limit": "积分兑豪礼",
			"tags": [{
				"text": "最高额度30万"
			}]
		},
		// {
		// 	"order": 3,
		// 	"icon": "PuFa.png",
		// 	"name": "浦发银行",
		// 	"url": "https://ecentre.spdbccb.com.cn/creditcard/indexActivity.htm?data=ZF2876490&itemcode=0000023776",
		// 	"recommends": [{
		// 		"text": "热门",
		// 		"color": "#E91E63"
		// 	}],
		// 	"time": "天天五折享美食",
		// 	"limit": "消费即可得浦发红包，最高4888元",
		// 	"tags": [{
		// 		"text": "额度最高8万元"
		// 	}]
		// },
		// {
		// 	"order": 1,
		// 	"icon": "XingYe.png",
		// 	"name": "兴业银行",
		// 	"url": "https://wm.cib.com.cn/html/webapp/fast-issue/home.html?id=e1e57ac876fc4820a6a45645f28d312d",
		// 	"recommends": [{
		// 		"text": "大额度",
		// 		"color": "#E91E63"
		// 	}],
		// 	"time": "1元办签证，境外刷卡笔笔返现",
		// 	"limit": "退税免排队，到账零等待",
		// 	"tags": [{
		// 			"text": "免年费"
		// 		},
		// 		{
		// 			"text": "大额度"
		// 		},
		// 		{
		// 			"text": "审批快"
		// 		}
		// 	]
		// },

		// {
		// 	"order": 2,
		// 	"icon": "PingAn.png",
		// 	"name": "平安银行",
		// 	"url": "https://c.pingan.com/ca/index?sign=3e7262cadfed09695d9a9949eedcff78&versionNo=R10310&scc=910000750&channel=WX&onlineSQFlag=N&cardCatenaNo=18a17a01a02a03a04a05a06&mt=bf018&ccp=3a1a2a9a8at4a5a10",
		// 	"recommends": [{
		// 		"text": "易审核",
		// 		"color": "#a91a63"
		// 	}],
		// 	"time": "72小时失卡保障",
		// 	"limit": "加油低至88折",
		// 	"tags": [{
		// 			"text": "免年费"
		// 		},
		// 		{
		// 			"text": "卡面由你选"
		// 		}
		// 	]
		// },

		// {
		// 	"order": 7,
		// 	"icon": "JiaoTong.png",
		// 	"name": "交通银行",
		// 	"url": "https://creditcardapp.bankcomm.com/applynew/front/apply/mgm/account/wechatEntry.html?recomId=23073902&saleCode=761000256&entryRecomId=&trackCode=A051516203152&isNewCardMgm=0&availableDate=07a9c29f67db7b4c2fdcb7ba305cbe37",
		// 	"recommends": [],
		// 	"time": "新户5积分兑好礼",
		// 	"limit": "最红星期五5%返现",
		// 	"tags": [{
		// 			"text": "免年费"
		// 		},
		// 		{
		// 			"text": "免息期长达56天"
		// 		}
		// 	]
		// },

		{
			"order": 5,
			"icon": "MinSheng.png",
			"name": "民生银行",
			"url": "https://creditcard.cmbc.com.cn/wsv2/?enstr=K5jQyfLcPzJ3ymFPNpknNdSwVON%2bmi9J%2baUcJyJhOfD7DajRU9Sa%2bFdmtNwBKaNdoJzJgdPWVKBQos4Ge7q9V7kvk4N2K5w33dRUBN%2f0JmBnBZWMLaGhSx711PdOWw7ynBLYLx0wyDQuvwJZ35ZCc824IsJCuN8DaJo50g5jRIONP%2bhmLJQqFlzf4SA07zZG%2f1R1XnG9bj0dz1fqFa97s6GAwEp8vj9p%2bYONiLylPFlz62dC3pTpgO%2bvuY9mVpLCNE%2b7mKo3041KwOMecibZdzlc%2bfZuhAc1rqtvw6YC4BW7fku4Bxb53ikwxuA4Ts5xllyrYdtZ6OtKhXWIO4Tqmw%3d%3d",
			"recommends": [{
				"text": "三秒核卡",
				"color": "#4CAF50"
			}],
			"time": "免费体检，机场礼遇，特惠商户",
			"limit": "境外笔笔1%返现",
			"tags": [{
				"text": "消费免年费"
			}]
		},

		// {
		// 	"order": 8,
		// 	"icon": "NongYe.png",
		// 	"name": "农业银行",
		// 	"url": "https://xinyongka.baidu.com/bkrcreditmarket/cardmkone?mkId=4575882&requestFrom=ka3",
		// 	"recommends": [],
		// 	"time": "积分兑里程",
		// 	"limit": "机场快速安检及贵宾厅服务",
		// 	"tags": [{
		// 			"text": "航空意外险"
		// 		},
		// 		{
		// 			"text": "72小时失卡保障"
		// 		}
		// 	]
		// },

		// {
		// 	"order": 9,
		// 	"icon": "ZhongXin.png",
		// 	"name": "中信银行",
		// 	"url": "https://creditcard.ecitic.com/h5/shenqing/index.html?sid=LM",
		// 	"recommends": [],
		// 	"time": "9积分兑豪礼，网购2倍积分",
		// 	"limit": "刷卡免年费",
		// 	"tags": [{
		// 			"text": "多倍积分"
		// 		},
		// 		{
		// 			"text": "高颜值卡片"
		// 		}
		// 	]
		// },

		// {
		// 	"order": 10,
		// 	"icon": "ShangHai.png",
		// 	"name": "上海小赢卡",
		// 	"url": "https://wallet.xiaoying.com/fe/wallet-landing/popreg/index.html?landId=1249&source=1000890252",
		// 	"recommends": [],
		// 	"time": "无需网点面签",
		// 	"limit": "0年费，超高下卡率",
		// 	"tags": [{
		// 		"text": "额度最高6万"
		// 	}]
		// },

// 		{
// 			"order": 11,
// 			"icon": "GuangFa.png",
// 			"name": "广发银行",
// 			"url": "http://95508.com/zctdI4Rx",
// 			"recommends": [],
// 			"time": "广发日9大品牌5折优惠",
// 			"limit": "新客开卡返现6%",
// 			"tags": [{
// 					"text": "自选商户3倍积分"
// 				},
// 				{
// 					"text": "加油返现"
// 				}
// 			]
// 		},
// 
		// {
		// 	"order": 11,
		// 	"icon": "ICBC.png",
		// 	"name": "工商银行",
		// 	"url": "https://elife.icbc.com.cn/OFSTCARD/creditCard/apply.do?channel=109BJSJBJSJ000600000000000&paraPromoCode=EW8880007777680",
		// 	"recommends": [],
		// 	"time": "生日消费10倍积分",
		// 	"limit": "免货币兑换费",
		// 	"tags": [{
		// 			"text": "免年费"
		// 		},
		// 		{
		// 			"text": "消费返现"
		// 		},
		// 		{
		// 			"text": "旅行特惠"
		// 		}
		// 	]
		// },
		// {
		// 	"order": 12,
		// 	"icon": "JianShe.png",
		// 	"name": "建设银行",
		// 	"url": "http://m.ccb.com/cn/creditcard/mobilev3/cards/product_list.html?Rcmd_insID=A00000326",
		// 	"recommends": [],
		// 
		// 	"time": "龙卡星期六，吃喝玩乐购",
		// 	"limit": "刷卡免年费",
		// 	"tags": [{
		// 		"text": "开卡礼"
		// 	},{
		// 		"text": "专属卡面"
		// 	},{
		// 		"text": "特色礼遇"
		// 	}]
		// },
		
 // 		{
 // 			"order": 13,
 // 			"icon": "ShangHai.png",
 // 			"name": "上海银行",
 // 			"url": "https://mbank.bankofshanghai.com/Latte/#/CreditHot?YLLink=0000001970",
 // 			"recommends": [],
 // 
 // 			"time": "800万旅行保障",
 // 			"limit": "新户达标送好礼",
 // 			"tags": [{
 // 				"text": "刷卡免年费"
 // 			}]
 // 		},

		// {
		// 	"order": 14,
		// 	"icon": "HaErBin.png",
		// 	"name": "哈尔滨银行",
		// 	"url": "https://apl.cc.hrbb.com.cn/bankcoas/mb/?Channel=C37697077050B7D1&Merchant=52AEF1D619821119",
		// 	"recommends": [],
		// 	"time": "生日当天双倍积分，积分好礼",
		// 	"limit": "灵活分期，多种选择",
		// 	"tags": [{
		// 		"text": "免年费"
		// 	}, {
		// 		"text": "免息期长达56天"
		// 	}]
		// }
		{
			"order": 16,
			"icon": "GuangZhou.png",
			"name": "广州银行",
			"url": "https://ccmp.creditcard.gzcb.com.cn/ccmp/applypc/index.html#/?td_channelid=gzzx_WAPgz041&channelCd=gzzx&channelSource=WAPgz041",
			"recommends": [],
			"time": "额度最高8万",
			"limit": "取现比例高",
			"tags": [{
				"text": "额度高"
			}, {
				"text": "调额快"
			}]
		},
		{
			"order": 18,
			"icon": "HengFeng.jpg",
			"name": "恒丰银行",
			"url": "https://3.cn/117q-fi2",
			"recommends": [{
				"text": "支付满额立减",
				"color": "#a91a63"
			}],
			"time": "新客户达标赠礼",
			"limit": "享中国银联白金信用卡权益",
			"tags": [{
				"text": "享自动分期付款"
			}]
		},
		// {
		// 	"order": 17,
		// 	"icon": "HuaQi.png",
		// 	"name": "花旗银行",
		// 	"url": "https://webservice.citibank.com.cn/citicoas/?pcode=CC120&scode=LZ88ZZYR&locale=zh_CN&ecid=AFR4MO90",
		// 	"recommends": [],
		// 	"time": "生日消费最高享5倍积分",
		// 	"limit": "新户最高可获1000元刷卡金",
		// 	"tags": [{
		// 		"text": "72小时失卡保障"
		// 	}, {
		// 		"text": "积分终身有效"
		// 	}]
		// }

	]
}
