(function ($) {
  "use strict";

  //search bar script
  const search_btn = document.querySelector(".header_search_btn");
  const search_box = document.querySelector(".header_search_box");
  if (search_btn && search_box) {
    search_btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle("close");
      search_box.classList.toggle("show_box");
    });
    document.addEventListener("click", function (e) {
      const search_form = document.querySelector(".header_search_form");
      if (
        e.target != search_btn &&
        search_box.classList.contains("show_box") &&
        search_form && !search_form.contains(e.target)
      ) {
        search_btn.classList.toggle("close");
      }
    });
  }

  // sidebar menu
  var sidebarMenu = $("#sidebar-menu");
  var bodyOvrelay = $("#body-overlay");
  $(document).on("click", ".close_button", function (e) {
    e.preventDefault();
    sidebarMenu.removeClass("show_menu");
  });
  $(document).on("click", "#navigation-button", function (e) {
    e.preventDefault();
    sidebarMenu.addClass("show_menu");
  });

  $(document).on("click", "#navigation-button2", function (e) {
    e.preventDefault();
    sidebarMenu.addClass("show_menu");
  });

  // navbar-click mobile menu
  $(".menu-item-has-children a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
      element.removeClass("show");
      element.children("ul").slideUp(500);
    } else {
      element.siblings("li").removeClass("show");
      element.addClass("show");
      element.siblings("li").find("ul").slideUp(500);
      element.children("ul").slideDown(500);
    }
  });

  const progressCircle = document.querySelector(".linear-circle");
  if (typeof Swiper !== 'undefined') {
    // Hero Slider
    new Swiper(".hero-slider-one", {
      speed: 3000,
      loop: false,
      autoplay: true,
      effect: "fade"
    });

    new Swiper(".movie-card-slider-sm-scroll", {
      speed: 9000,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        0: {
          slidesPerView: "1.2",
        },
        576: {
          slidesPerView: "1.3",
        },
        992: {
          slidesPerView: "2.5",
        },
        1366: {
          slidesPerView: "3",
        },
        1600: {
          slidesPerView: "3.3",
        },
      },
    });
    new Swiper(".rotate-movie-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      speed: 8000,
      loop: true,
      autoplay: true,
      clickable: true,
      allowTouchMove: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      navigation: {
        prevEl: ".prev-slide",
        nextEl: ".next-slide",
      },
      breakpoints: {
        0: {
          slidesPerView: "1.2",
        },
        576: {
          slidesPerView: "1.3",
        },
        992: {
          slidesPerView: "2.5",
        },
        1366: {
          slidesPerView: "3",
        },
        1600: {
          slidesPerView: "3.3",
        },
      },
    });
  }

  $('.popup_video').magnificPopup({
    type: 'inline',
    closeOnContentClick: false,
    midClick: true,
    callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
    },
    mainClass: 'mfp-fade',
  });

  /**-------------------------------------------------
    *Fixed HEader
    *----------------------------------------------------**/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
          $('.nav-container').addClass('sticky fade_down_effect');
      } else {
          $('.nav-container').removeClass('sticky fade_down_effect');
      }
   });

  /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
       $(".BackTo").fadeIn();
    } else {
       $(".BackTo").fadeOut();
    }
  });
  $("body, html").on("click", ".BackTo", function () {
    $('html, body').animate({
      scrollTop: 0
    });
  });


  /**---------------------------------------
   *  QTY Inputs
   * -------------------------------------*/
  $(function () {
    $("div.quantity").append(
      '<a class="inc qty-button">+</a><a class="dec qty-button">-</a>'
    );
    $(".qty-button").on("click", function () {
      console.log("clicked");
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();

      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  });
})(jQuery, window);


$(window).on('load', function() { 
  $('#loading').fadeOut();
  $('#homepage').fadeIn();
});

if (typeof Swiper !== 'undefined') {
  new Swiper(".brand-logo-1", {
    speed: 4000,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    breakpoints: {
      0: { slidesPerView: "4.5" },
      576: { slidesPerView: "5.5" },
      768: { slidesPerView: "6.5" },
      992: { slidesPerView: "7.5" },
      1200: { slidesPerView: "8.5" },
      1500: { slidesPerView: "9.5" },
      1700: { slidesPerView: "10.5" },
    },
  });
  new Swiper(".brand-logo-2", {
    speed: 4000,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    autoplay: {
      disableOnInteraction: true,
      reverseDirection: true,
    },
    breakpoints: {
      0: { slidesPerView: "4.5" },
      576: { slidesPerView: "5.5" },
      768: { slidesPerView: "6.5" },
      992: { slidesPerView: "7.5" },
      1200: { slidesPerView: "8.5" },
      1500: { slidesPerView: "9.5" },
      1700: { slidesPerView: "10.5" },
    },
  });
}


AOS.init({
  easing: "ease",
  once: true,
});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});