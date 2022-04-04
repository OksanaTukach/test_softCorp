"use strict";

$(document).ready(function () {
  var width = $(window).width();
  var height = $(window).height();
  console.log('Width: ' + width + 'px');
  console.log('Height: ' + height + 'px');
  headerMainScreen();
  $('body').on('click', '.header__burger', function () {
    $(this).toggleClass('header__burger_close');
    $(this).siblings('.header__menu').toggleClass('header__menu_open');
    headerMobHeight();
  });

  var headerMobHeight = function headerMobHeight() {
    var headerMob = document.querySelector('.header__menu');
    var header = document.querySelector('.header');
    setTimeout(function () {
      headerMob.style.height = window.innerHeight - header.clientHeight + 'px';
    }, 1);
  };

  (function () {
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.querySelector('.order__points_scroll').scrollLeft -= delta * 10;
      e.preventDefault();
    }

    if (document.querySelector('.order__points_scroll').addEventListener) {
      document.querySelector('.order__points_scroll').addEventListener("mousewheel", scrollHorizontally, false);
      document.querySelector('.order__points_scroll').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      document.querySelector('.order__points_scroll').attachEvent("onmousewheel", scrollHorizontally);
    }
  })();

  $(".slider").slider({
    range: "max",
    min: 1,
    max: 100,
    value: 75,
    slide: function slide(event, ui) {
      $(".form__item_value .value").html(ui.value + '%');
    }
  });
  $(".form__item_value .value").html($(".slider").slider("value") + '%');
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    load_delay: 100
  });

  if ($('.styler').length) {
    $('.styler').styler();
  }
});
$(window).resize(function () {
  var width = $(window).width();
  var height = $(window).height();
  headerMainScreen();
});

var headerMainScreen = function headerMainScreen() {
  var mainScreen = document.querySelector('.main-screen');
  var mainScreenText = document.querySelector('.main-screen__information');
  var header = document.querySelector('.header');
  setTimeout(function () {
    mainScreen.style.height = mainScreenText.clientHeight + header.clientHeight + 'px';
  }, 100);
};