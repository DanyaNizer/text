// Скрипты для бургер меню
var Menu = {

   el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
   },

   init: function () {
      Menu.bindUIactions();
   },

   bindUIactions: function () {
      Menu.el.ham
         .on(
            'click',
            function (event) {
               Menu.activateMenu(event);
               event.preventDefault();
            }
         );
   },

   activateMenu: function () {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click');
   }
};

Menu.init();

$(document).ready(function () {
   $('.menu').click(function (event) {
      $('#top__nav').toggleClass('active');
      $('.menu').toggleClass('wi');
   });
   $('.fl').click(function (event) {
      $('#top__nav').toggleClass('active');
      $('.menu-top').toggleClass('menu-top-click');
      $('.menu-middle').toggleClass('menu-middle-click');
      $('.menu-bottom').toggleClass('menu-bottom-click');
      $('.menu').toggleClass('wi');
   });
});

// Скрипты для слайдеров

$('.first-page__slider').slick({
   dots: true,
   arrows: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 5000,
   fade: true,
   cssEase: 'linear',
   customPaging: function (slick, index) {
      return '<a>' + (index + 1) + '</a>';
   }
});

$('.wrap__header__slider').slick({
   dots: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: false,
   fade: true,
   cssEase: 'linear',
});

$('.two-page__slider').slick({
   dots: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: false,
   fade: true,
   cssEase: 'linear',
});


$('.three-page__slider').slick({
   dots: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: false,
   fade: true,
   cssEase: 'linear',
});


$('.four-page__slider').slick({
   dots: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: false,
   fade: true,
   cssEase: 'linear',
});



$('.bloks__sliders').slick({
   dots: false,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 5000,
   arrows: true,
   fade: true,
   cssEase: 'linear',
});


$('.slide-container').on('setPosition', function () {
   jbResizeSlider();
});

//we need to maintain a set height when a resize event occurs.
//Some events will through a resize trigger: $(window).trigger('resize');
$(window).on('resize', function (e) {
   jbResizeSlider();
});

//since multiple events can trigger a slider adjustment, we will control that adjustment here
function jbResizeSlider() {
   $slickSlider = $('.slide-container');
   $slickSlider.find('.slick-slide').height('auto');

   var slickTrack = $slickSlider.find('.slick-track');
   var slickTrackHeight = $(slickTrack).height();

   $slickSlider.find('.slick-slide').css('height', slickTrackHeight + 'px');
}