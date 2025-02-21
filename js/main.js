// main.js - Responsive Adjustments

jQuery(function($) {
  'use strict';

  // ... (Existing code: AOS.init(), loader(), floatingLabel(), scrollWindow(), counter(), jarallaxPlugin(), contactForm(), stickyFillPlugin(), animateReveal())

  // Responsive Mobile Menu Adjustments
  var siteMenuClone = function() {
    setTimeout(function() {
      $('.js-clone-nav').each(function() {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
      });

      var counter = 0;
      $('.unslate_co--site-mobile-menu .has-children').each(function() {
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class': 'collapse',
          'id': 'collapseItem' + counter,
        });

        counter++;
      });
    }, 1000);

    // Mobile Menu Click Handling (Touch-Friendly)
    $('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      $this.toggleClass('active'); // Toggle active class for visual feedback
      $this.closest('li').find('.collapse').collapse('toggle'); // Use Bootstrap's collapse toggle
      e.preventDefault();
    });

    // ... (Existing resize and burger toggle logic)
  };

  // Improved Isotope Layout
  var siteIstotope = function() {
    var $container = $('#posts').isotope({
      itemSelector: '.item',
      isFitWidth: true,
      percentPosition: true, // Use percentage-based positioning
    });

    $(window).on('resize', function() {
      $container.isotope('layout');
    });

    // ... (Existing filter logic and image loading)
  };

  // Responsive Owl Carousel
  var owlCarouselPlugin = function() {
    $('.testimonial-slider').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 20,
      margin: 10,
      smartSpeed: 2000,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      nav: true,
      navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],
      responsive: {
        0: { stagePadding: 10, margin: 5 }, // Adjust for very small screens
        400: { stagePadding: 20, margin: 10 },
        600: { stagePadding: 100, margin: 50 },
      },
    });

    // ... (Existing logo slider and single slider logic)
  };

  // ... (Existing onePageNavigation(), portfolioItemClick(), mobileToggleClick())

  siteMenuClone();
  siteIstotope();
  owlCarouselPlugin();
});
