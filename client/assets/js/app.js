﻿(function () {
  var main = $('.main-content');
  var headerBar = $('.header');
  var windowz = $(window);
  var windowWidth = Math.max(windowz.width(), windowz.innerWidth());
  windowz.load(function () {
    $(".page-loader").fadeOut("slow");
  });

  if (windowWidth > 1199) {
    windowz.on("scroll", function () {
      if (windowz.scrollTop() > 27) {
        headerBar.removeClass('header');
        headerBar.addClass('fix-header-bar animation');
        main.css('padding-top', '100px');
      } else {
        headerBar.removeClass('fix-header-bar animation');
        headerBar.addClass('header');
        main.css('padding-top', '0');
      }
    });
  }

  $('.main-slider').carousel({
    visible: 1,
    itemMargin: 0,
    autoRotate: 6000
  });
  $('.audio-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.audio-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.speaker-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.speaker-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.computer-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.computer-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.gear-brands-slider').carousel({
    visible: 6,
    itemMinWidth: 96.92,
    itemEqualHeight: 65,
    itemMargin: 0,
  });
  $('.gear-product-slider').carousel({
    visible: 3,
    itemMinWidth: 250,
    itemEqualHeight: 400
  });
  $('.news-slider').carousel({
    visible: 1,
  });
  $('.brands-sliderz').carousel({
    visible: 3,
  });
  $('.nav-vertical').click(function () {
    $('.nav-item').slideToggle();
    console.log("its work");
  });
} ());