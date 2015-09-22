if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false,
        smoothScrolling: false
    });
}

$(function(){
  var windowH = $(window).height() - 60;
  $(window).on('resize', function(){
    windowH = $(window).height() - 60;
  });

  $(window).scroll(function() {
     var scrollVal = $(this).scrollTop();
     console.log('scrollVal', scrollVal);
     console.log('windowH', windowH);
      if ( scrollVal > windowH ) {
          $('.navbar').addClass('navbar-fixed-top');
          $('.main').css({'margin-top': '70px'});
      } else {
          $('.navbar').removeClass('navbar-fixed-top');
          $('.main').css({'margin-top': 0});
      }
  });
});

$('#nav-brand').click(function() {
  $('html, body').animate({
    scrollTop: $(".logo").offset().top - 40
  }, 400);
  return false;
});
$("#nav-about").click(function() {
  $('html, body').animate({
    scrollTop: $(".about").offset().top - 70
  }, 400);
  return false;
});
$("#nav-schedule").click(function() {
  $('html, body').animate({
    scrollTop: $(".schedule").offset().top - 70
  }, 400);
  return false;
});
$("#nav-faq").click(function() {
  $('html, body').animate({
    scrollTop: $(".faq").offset().top - 70
  }, 400);
  return false;
});
