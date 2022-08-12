$(document).ready(function(){
    /*плавная прокрут вниз длительностью полсекунды*/
 $('nav a[href^="#"]').click(function(){
    let target=$(this).attr('href');
    $('html,body').animate({
        scrollTop:$(target).offset().top},500);
 $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
 });
    /*меню мобильного бургера*/
    $('.menu__burger').click(function(){
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    });
});