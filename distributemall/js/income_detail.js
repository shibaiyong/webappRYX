var is_time = getQueryString('is_time') || 0;
var status = getQueryString('status') || 0;
var login_uid = $.trim($('.login_uid').val());

    $(this).addClass('bottomline').siblings().removeClass('bottomline');
    $.ajax({
        url:'income_api',
        type:'post',
        data:{
            status,
            type:2,
            is_time,
            login_uid
        },
        success:function(res){
            var str = '';
            if( res.code == 1 ){
                if(res.data.length == 0){
                    $('.cashdetail').hide();
                    $('.nodata').show();
                }else{

                    for(var i = 0; i < res.data.length; i++){
                        if(res.data[i].withdraw_status == '提现失败'){
                            var redLi = `<li class="title red"><span>${res.data[i].withdraw_status}</span><a href="javascript:;" style="color:#999;font-size: 0.1rem;margin-left:0.1rem;">${res.data[i].return_json}</a></li>`
                        }else{
                            redLi = `<li class="title"><span>${res.data[i].withdraw_status}</span></li>`
                        }
                        str += `<div class="bankcardinfo">
                                <div class="bankcardbottom">
                                  <ul class="bankmemeber">
                                    `+ redLi +`
                                    <li><span>${res.data[i].created_at}</span></li>
                                  </ul>
                                  <ul class="bankstatus">
                                    <li><span>${res.data[i].money}元</span></li>
                                  </ul>
                                </div>
                              </div>`
                    }

                    $('.bankcardinfocontainer').html(str)
                    $('.cashdetail').show();
                    $('.nodata').hide();

                }

            }
        }
    })



function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
