$(document).ready(function(){
  $(".owl-slider-1").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1,
  });
});

$(document).ready(function(){
  $(".owl-slider-2").owlCarousel({
    loop: true,
    margin: 20,
    // autoWidth: true,
    dots: false,
    nav: true,
    items: 3,
  });
});
