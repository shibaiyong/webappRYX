var is_time = getQueryString('is_time') || 0;
var status = getQueryString('status') || 0;

$('.cardstatus span').click(function(){
    $(this).addClass('bottomline').siblings().removeClass('bottomline');
    var type = $(this).attr('type');
    $.ajax({
        url:'income_api',
        type:'post',
        data:{
            status,
            type,
            is_time
        },
        success:function(res){
            var str = '';
            if( res.code == 1 ){
                $('.money').text('￥'+ res.count_money)
                if(type == 1){
                    for(var i = 0; i < res.data.length; i++){

                        str += `<div class="bankcardinfo">
                                <div class="bankcardbottom">
                                  <ul class="bankmemeber">
                                    <li class="title"><span>${res.data[i].type}</span></li>
                                    <li><span>${res.data[i].created_at}</span></li>
                                  </ul>
                                  <ul class="bankstatus">
                                    <li><span>${res.data[i].money}元</span></li>
                                  </ul>
                                </div>
                              </div>`
                    }
                }else{
                    for(var i = 0; i < res.data.length; i++){
                        if(res.data[i].withdraw_status == '提现失败'){
                            var redLi = `<li class="title red"><span>${res.data[i].withdraw_status}</span></li>`
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
                }

                $('.bankcardinfocontainer').html(str)
            }
        }
    })

})

setTimeout(function(){
    $(".cardstatus span").eq(0).click();
},0)

function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
