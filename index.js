$(document).ready($(window).on('resize', function () {
    'use strict';
    var element = document.querySelector('#header'),
      elHeight = 0,
      elTop = 0,
      dHeight = 0,
      wHeight = 0,
      wScrollCurrent = 0,
      wScrollBefore = 0,
      wScrollDiff = 0;
    window.addEventListener('scroll', function () {
      var temp;
      if ($(window).width() <= 768) {
        elHeight = element.offsetHeight;
        dHeight = document.body.offsetHeight;
        wHeight = window.innerHeight;
        wScrollCurrent = window.pageYOffset;
        wScrollDiff = wScrollBefore - wScrollCurrent;
        elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

        // scrolled to the very top; element sticks to the top
        if (wScrollCurrent <= 0) {
          temp = '0px';
        } // scrolled up; element slides in
        else if (wScrollDiff > 0) {
          temp = (elTop > 0 ? 0 : elTop) + 'px';
        } // scrolled down
        else if (wScrollDiff < 0) {
          // scrolled to the very bottom; element slides in
          if (wScrollCurrent + wHeight >= dHeight - elHeight) {
            temp = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';
          } // scrolled down; element slides out
          else {
            temp = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
          }
        }
        wScrollBefore = wScrollCurrent;
      }
      else {
        temp = '0px';
      }
      element.style.top = temp;
    });
  }).resize()
);

$('body').scrollspy({target: '.navbar-fixed-top'})

$('.navbar-collapse ul li a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

$(function () {
  $('body').on('click', 'a.scrollable', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
