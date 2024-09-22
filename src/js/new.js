$(document).ready(function(){
  var $slider = $('.slick-slider');

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false 
        }
      }
    ]
  });

  // Custom navigation buttons
  $('#prev').click(function() {
    $slider.slick('slickPrev');
  });

  $('#next').click(function() {
    $slider.slick('slickNext');
  });
});