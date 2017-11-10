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
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 567,

        settings: {

        }
      }
    ]
  });
});
