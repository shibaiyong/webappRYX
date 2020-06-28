$('.supportbank').click(function(){
    $('.showtoastwrapper').show()
})

$('.closeicon span').click(function(){
    $('.showtoastwrapper').hide()
})


var login_uid = $.trim($('.login_uid').val());
var withdraw_money = getQueryString('withdraw_money') || 0;
var account_money,deduct_money;

$('.mybtn').click(function(){
    var $this = $(this);
    if($(this).hasClass('unableclick')){
        return false;
    }else{
        $(this).addClass('unableclick');
    }

    var withdrawmoney = $('.cash input').val();
    var dotmoney = withdrawmoney.split('.')[1];
    if(!dotmoney || dotmoney.length <= 2){

    }else if( dotmoney.length > 2 ){
        mui.toast('金额最多保留两位小数',{ duration:'long', type:'div' })
        return false;
    }
    $.ajax({
        url: 'withdraw_api',
        type: 'post',
        data: {
            money:withdrawmoney,
            withdraw_money,
            login_uid,
            account_money,
            deduct_money
        },
        success: function (res) {
            $this.removeClass('unableclick');
            if(res.code == 1){
                mui.toast(res.msg,{ duration:'long', type:'div' })
            }else{
                window.location.href=`withdraw_result?card_bank_name=${res.data.card_bank_name}&card_number=${res.data.card_number}&money=${res.data.money}&login_uid=${login_uid}`
            }
        }
    })

})

calculateMoney($('.withdrawmoney'))

$('.withdrawmoney').blur(function(){
    calculateMoney($(this))
})

$('.supportbank a').click(function () {
    $('.showtoastcontainer').css('visibility','visible');
})


$('.showtoastcontainer .closeicon').click(function () {
    $('.showtoastcontainer').css('visibility','hidden');
})

$('.debuctexplain p a').click(function () {
    window.location.href=`income_tax?login_uid=${login_uid}`
})

function getQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function calculateMoney( dom ){
    var inputMoney = dom.val();
    $.ajax({
        url: 'calculate',
        type: 'post',
        data: {
            money:inputMoney,
            uid:uid
        },
        success: function (res) {

            if(res.code==1){
                account_money = res.data.account_money;
                deduct_money = res.data.deduct_money;
                $('.actuallymon span').text(account_money)
                $('.deduct span:eq(1)').text(deduct_money)

            }else if(res.code==2){
                account_money = inputMoney;
                deduct_money = '0';
                $('.actuallymon span').text(inputMoney)
                $('.deduct span:eq(1)').text('0')
            }

        }
    })
}