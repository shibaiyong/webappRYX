//用于页面自适应的js

var windowheight = $(window).height();

var headerheight = $('.header').outerHeight();

var totalheight = $('.merchantinfo-content').outerHeight();

var leftsideheight = $('.navbarr').outerHeight();

if(windowheight - headerheight >= totalheight){
    $('.navbarr').height(windowheight - headerheight);
    $('.info-list').height(windowheight - headerheight - 49)
}else{
    if(totalheight > leftsideheight + 40){
        $('.navbarr').height(totalheight - 40);
    }else{
        $('.info-list').height(totalheight - 49 - 40)
        //侧边栏高度必须手动设置一下
        $('.navbarr').height(leftsideheight);
    }
}

//侧边栏导航效果
$('.navbarr .navbar-item>a').click(function(){
    var status = $(this).attr('status') 
    if (status == '0'){
        $(this).attr('status','1');
        $(this).next().slideDown();
    }else{
        $(this).attr('status','0');
        $(this).next().slideUp();
    }
})