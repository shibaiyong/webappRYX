
$('#password').focus(function(){
    $(this).parents('.form-group').find('img').attr('src','../img/staff/passwordCheck.png')
}).blur(function(){
    $(this).parents('.form-group').find('img').attr('src','../img/staff/passwordUncheck.png')
})

$('#user').focus(function(){
    $(this).parents('.form-group').find('img').attr('src','../img/staff/accountUncheck.png')
}).blur(function(){
    $(this).parents('.form-group').find('img').attr('src','../img/staff/account.png')
})

