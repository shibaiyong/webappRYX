//var baseUrl = "http://192.168.11.230/";
var baseUrl = "https://mposprepo.ruiyinxin.com:4430/webfront/";


function getRequest(name) {   
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return decodeURI(r[2]); return null; 
}

function openFrame(title, url){//转向frame
    window.location.href="../help/frame.html?url=https://www.ruiyinxin.com/upload/desc/ruiyinxinNew/"+url+"&title="+title;
}

function backHome(){//返回首页
    window.location.replace("../main.html");
}

//cookie操作
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//取回cookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return ""
}
//跳往外部地址
function goOutLink(url){
    if(!url){ return;}
    var el=$.loading({
        content:'转向第三方页面中...',
    })
    window.location.href=url;
    setTimeout(function(){
        el.loading("hide");
    },3000);
  
}
//随机地址
function urlRnd(urlsStr){
    var urlArr  = urlsStr.split('|');
    var n = Math.floor(Math.random() * urlArr.length + 1)-1;
    // console.log(urlArr[n]);
    goOutLink(urlArr[n]);
}
//跳往内部地址
 function pageRoute(url){
    if(url){
    var el=$.loading({
        content:'正在加载...',
    })
        window.location.href=url;  
    }else{
        $.tips({
            content:'敬请期待',
            stayTime:1500,
            type:"success"
        });
    }
}
function sendSS(name, url){//发送统计
    window._hmt && window._hmt.push(['_trackEvent', name, 'click', url]);
}
$(document).ready(function(){
    $(document).on('click',"#bank-list li",function(e){
        var urls= $(this).data('links');
        var bankName = $(this).find("h4").contents().filter(function() { return this.nodeType === 3; }).text();
        var urlArr  = urls.split('|');
        var n = Math.floor(Math.random() * urlArr.length + 1)-1;
        var url = urlArr[n];
        sendSS(bankName+n, url);
 
        goOutLink(url);
    })
    window._hmt && window._hmt.push(['_trackEvent', '页面展示', 'show']);
})