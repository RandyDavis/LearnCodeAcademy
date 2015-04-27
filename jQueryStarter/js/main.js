'use strict';

$(function() {


  // Set Interval
  var width = 720;
  var animationSpeed = 1000;
  var pause = 1000;
  var currentSlide = 1;

  // Cache DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');
  var interval;

  function startSlider() {
    interval = setInterval(function() {
      // Animate margin-left
      $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
        // If it's last slide, go to position 1 (0px);
        currentSlide++;
        if (currentSlide == $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  // Listen for mouseenter and pause
  // Resume on mouseleave 
  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  startSlider();
});

