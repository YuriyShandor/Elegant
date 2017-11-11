$(document).ready(function() {
  $('.toggler-icon').on('click', function(){
    $('.nav-bar').slideToggle('0.5s');
  });

  var products = ['all', 'brending', 'web-design', 'mobile-ui', 'illustration'];

  $('.work-btn__all').addClass('work-btn_active');

  products.forEach(function(item) {
    $(`.work-btn__${item}`).click(function(){
      $('.our-works__class').removeClass('work-btn_active');
      $(this).addClass('work-btn_active');
      $('.work__all').addClass('work-hidden');
      $(`.work__${item}`).removeClass('work-hidden');
    });
  });

  // var servicesSlider = $('.services-slider');
  // var maxItems = Math.round(servicesSlider.parent('div').width() / 400);
  // if(servicesSlider.children('div').length < maxItems) {
  //   maxItems = servicesSlider.children('div').length;
  // }

  $('.services-slider').slick({
    infinite: true,
    //variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $(".services-slider__nav_next"),
    prevArrow: $(".services-slider__nav_prev"),
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,

        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 567,

        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#section-counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.count-value').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      a = 1;
    }
  });
});
