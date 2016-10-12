(function () {
  var mainViews = $('.main-views'); 
  var headerBar = $('.fix-header-bar');
  var windowz = $(window);
  var windowWidth = Math.max(windowz.width(), windowz.innerWidth());
  
  /*Check the size of window when load */
  windowz.load(function () {
    $(".page-loader").fadeOut("slow");
    checkWidth();
  });
 
  /*Check the size of window when it resize */
  windowz.on('resize', function () {
    windowWidth = Math.max(windowz.width(), windowz.innerWidth());
    checkWidth();
  });


  /*  */
  var checkWidth = function () {
    if (windowWidth > 1199) {
      mainViews.css("padding-top", headerBar.height());
      headerBar.css('position', 'fixed');
      windowz.on("scroll", function () {
        if (windowz.scrollTop() > 27) {
          headerBar.css("background-color", "rgba(251, 251, 251, 0.75)");
        } else {
          headerBar.css("background-color", "#fbfbfb");
        }
      });
    } else {
      mainViews.css("padding-top", 0);
      headerBar.css('position', 'relative');
    }
  };
} ());