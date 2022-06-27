$(function() {

    $('.c-button--menu').on('click',function(){
        $('.p-aside,.l-aside,.c-mask,.l-container,.l-footer').addClass('open');
    });

    $('.c-button--close').on('click',function() {
        $('.p-aside,.l-aside,.c-mask,.l-container,.l-footer').removeClass('open');
    })
});