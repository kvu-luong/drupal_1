

jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  $('#horizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    closed: 'accordion', // Start closed if in accordion view
    activate: function (event) { // Callback function if tab is switched
      var $tab = $(this);
      var $info = $('#tabInfo');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
    }
  });

  var defaults = {
    containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 100,
    easingType: 'linear'
  };

  
    $(function () {
        $('.gallery-item a').Chocolat();
    });

  $().UItoTop({
    easingType: 'easeOutQuart'
  });

});

  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function (slider) {
        $('body').removeClass('loading');
      }
    });

    $("#flexiselDemo1").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
          portrait: {
            changePoint: 480,
            visibleItems: 1
          },
          landscape: {
            changePoint: 640,
            visibleItems: 2
          },
          tablet: {
            changePoint: 768,
            visibleItems: 3
          }
        }
      });

  });

