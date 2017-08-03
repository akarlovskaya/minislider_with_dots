$(document).ready(function(){

  var currentSlider = 0;
  var autoSlide;
  //cache DOM
  $slides = $('.slides_wrapper .slide');
  $sliderLength = $('.slides_wrapper > li').length;
  $dot = $('.nav-thumbs a');

  //cache DOM
  // var $slider = $('#slider');
  // var $slideContainer = $slider.find('.slides');
  // var $slides = $slideContainer.find('.slide');

  $('.slides_wrapper > li#1').css('display', 'inline-block'); // show first li
  $('.nav-thumbs a:first').addClass('active'); // add active class to first dot

  $dot.click(function(){
    $dot.removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('data-slide');
    showSLider(id);
  })

  function visabilityControl(){
    var item = $slides.eq(currentSlider);
    var id = item.attr('id');
    $slides.hide();
    item.css('display', 'inline-block');
    $('a').removeClass('active');
    $('a.'+id).addClass('active');
  }

  function startSlider() {
    autoSlide = setInterval( function() {
      currentSlider ++;
      if (currentSlider > $sliderLength - 1) {
        currentSlider = 0;
      }
      visabilityControl();
    }, 7000);
  }

  function pauseSlider() {
    clearInterval(autoSlide);
  }

  function showSLider(id) {
    clearInterval(autoSlide);
    $slides.fadeOut(300);
    $('.slides_wrapper > li#'+id).fadeIn(300);
    $('.nav-thumbs > a.'+id).addClass('active');
    startSlider();
  }

  $('.slides_wrapper').on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  startSlider();

});
