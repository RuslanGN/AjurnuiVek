$(document).ready(function () {
  lazy();
  Slider();
  nav();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

//global variables
var innerWidth = $('body').innerWidth();


//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    threshold: '',
    effect: 'fadeIn',
    effectTime: '300'
  });
}

//nav
function nav() {
  var navButton = $('.mobile-button'),
      nav = $('nav'),
      navContent = $('.nav__container');

  navButton.click(function (event) {
    event.preventDefault();
    $(this).parents('.nav').toggleClass('nav_active');
    navState();
  })

  function navState() {
    nav.each(function() {
      if ($(this).hasClass('nav_active')) {
        $(this).find('.mobile-button').addClass('mobile-button_active');
        $(this).children('.nav__container').slideDown(300);
      } else {
        $(this).find('.mobile-button').removeClass('mobile-button_active');
        $(this).children('.nav__container').slideUp(300);
      }
    })
  }
  $(window).resize(function () {
    if (innerWidth > 768) {
      console.log('dd')
      nav.removeClass('nav_active');
      navContent.show();
      navButton.removeClass('mobile-button_active')
    } else {
      navContent.hide();
    }
  });
}

//слайдеры
function Slider() {
  var slider = $('.gallery-slider');

  function sliderInit() {
    slider.slick({
      arrows: true,
      slidesToScroll: 2,
      slidesToShow: 4,
      dots: false,
      variableWidth: true,
      prevArrow: '.gallery__button-prev',
      nextArrow: '.gallery__button-next',
      responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  sliderInit();
  slider.on('beforeChange', function () {
    lazy();
  });
  slider.on('afterChange', function () {
    lazy();
  });
}