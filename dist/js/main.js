//поменять язык
$('.header-lang-item').click(function (){
  $('.header-lang-item').removeClass('active');
  $(this).addClass('active');
});

//Открыть header-nav на устр с шириной экрана (767 < экран < 1200px)
$('.toggle-header-nav').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.header-nav').addClass('show');
  } else {
    $('.header-nav').removeClass('show');
  }
});


$(document).ready(function (){
  //позиция mobile-menu на моб устр
  if ($(window).width() < 767) {
    let height = $('header').height();
    let menuHeight = $(window).height() - height;
    $('.mobile-menu').css({
      'top': height,
      'height': menuHeight
    });
  }
});

//открыть mobile-menu на моб устр
$('.toggle-mobile-menu').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.mobile-menu').addClass('show');
    $('body').addClass('scroll-locked');
  } else {
    $('.mobile-menu').removeClass('show');
    $('body').removeClass('scroll-locked');
  }
});