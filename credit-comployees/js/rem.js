(function (designWidth, maxWidth) {
  var doc = document,
      win = window;
  var docEl = doc.documentElement;
  var tid;
  var rootItem, rootStyle;

  function refreshRem() {
      var width = docEl.getBoundingClientRect().width;
      if (!maxWidth) {
          maxWidth = 540;
      }
      ;
      if (width > maxWidth) {
          width = maxWidth;
      }
      //与淘宝做法不同，直接采用简单的rem换算方法1rem=100px
      var rem = width * 100 / designWidth;
      //兼容UC开始
      rootStyle = "html{font-size:" + rem + 'px !important}';
      rootItem = document.getElementById('rootsize') || document.createElement("style");
      if (!document.getElementById('rootsize')) {
          document.getElementsByTagName("head")[0].appendChild(rootItem);
          rootItem.id = 'rootsize';
      }
      if (rootItem.styleSheet) {
          rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText = rootStyle)
      } else {
          try {
              rootItem.innerHTML = rootStyle
          } catch (f) {
              rootItem.innerText = rootStyle
          }
      }
      //兼容UC结束
      docEl.style.fontSize = rem + "px";
  };
  refreshRem();

  win.addEventListener("resize", function () {
      clearTimeout(tid); //防止执行两次
      tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener("pageshow", function (e) {
      if (e.persisted) { // 浏览器后退的时候重新计算
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
      }
  }, false);

  if (doc.readyState === "complete") {
      doc.body.style.fontSize = "16px";
  } else {
      doc.addEventListener("DOMContentLoaded", function (e) {
          doc.body.style.fontSize = "16px";
      }, false);
  }
})(375, 750);


/*-------------------弹窗展示银行列表------------------------------------*/
$(function(){
	
	$('.supportbank a').click(function(){
		var str = `<div class="showtoastcontainer">
				<div class="showtoast">
					<div class="closeicon"><span>&#xD7;</span></div>
					<div class="showtoast-title">提现支持银行</div>
					<div class="content">
						<ul>
							<li><img src="../img/index/JT@2x.png" /><span>招商银行</span></li>
							<li><img src="../img/index/JT@2x.png" /><span>招商银行</span></li>
							<li><img src="../img/index/JT@2x.png" /><span>招商银行</span></li>
							<li><img src="../img/index/JT@2x.png" /><span>招商银行</span></li>
							<li><img src="../img/index/JT@2x.png" /><span>招商银行</span></li>
						</ul>
					</div>
				</div>
			</div>`
		$('body').append(str)
	})
	
	$(document).on('click','span',function(){
		$('body .showtoastcontainer').remove();
    })

    /*-------------------模拟复选框的功能逻辑-----------------------*/
    
    $('.checkboxContainer').click(function(){
        if(!$(this).hasClass('checkedBg')){
            $(this).addClass('checkedBg').removeClass('uncheckedBg')
            $(this).find('span').attr('chec',1)
        }else{
            $(this).removeClass('checkedBg').addClass('uncheckedBg')
            $(this).find('span').attr('chec',0)
        }
    })

    /*-------------------------------去掉拦截弹窗-----------------------------------*/

    var del_times = 0, deTimer = null;
		function adGo() {
            var iframe = document.getElementsByTagName('iframe')[0];
			if(iframe){
				
				var bodyNode = {tagName:''}, iframeParent, targetNode = iframe.parentNode;
				while (bodyNode.tagName != 'BODY'){
					bodyNode = targetNode;
					if(bodyNode.tagName != 'BODY'){
						iframeParent = targetNode;
						targetNode = targetNode.parentNode;
					}
				}
				if(iframeParent) //如果iframe有父类
					bodyNode.removeChild(iframeParent);
				else
					bodyNode.removeChild(iframe);
			}
			del_times++;
			if (del_times > 10) window.clearInterval(deTimer)
		}
		
		
		(function(){adGo();}())
        deTimer = self.setInterval(adGo, 200);
        
})
