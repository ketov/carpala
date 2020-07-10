'use strict'

$(document).ready(function () {

    var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
    $containers.scrollAnimations();

    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top-75;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });
    }

    $('.toclipboard').on('click', function(){
      var el = $(this).children('.thankyou__container');
      var text = el.text();
      $('#clipboard-hidden').val(text).select();
      $('#clipboard-hidden').select();
      document.execCommand("copy");
      $('#clipboard-hidden').blur();
      
      $('#clipboard').text('Скопировано: ' + text);
      $('#black-bg, #clipboard').fadeIn(150);
      setTimeout(function(){
         $('#black-bg, #clipboard').fadeOut(150);
      }, 500);
  });





    var swiper = new Swiper('.categories', {
        freeMode: true,
        slidesPerView: 3,
        spaceBetween: 4,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


      var swiper = new Swiper('.popular', {
        freeMode: true,
        slidesPerView: 1.5,
        spaceBetween: 24,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
      });


      var swiper = new Swiper('.driver', {
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 8,
        //loop: true,
        //loopFillGroupWithBlank: true,
      });

      $('.question').on('click', function(){
          if($(this).hasClass('active')){
              $(this).siblings('.answer').slideUp(250);
              $(this).removeClass('active');
          }else{
              $(this).siblings('.answer').slideDown(250);
              $(this).addClass('active');
          }
      });

});