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

// Скрипты для слайдер меню
$(document).ready(function () {
   $('.slider').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
   });
});