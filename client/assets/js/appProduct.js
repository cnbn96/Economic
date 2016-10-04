(function () {
    var windowz = $(window);
    var windowWidth = Math.max(windowz.width(), windowz.innerWidth());

    if (windowWidth > 1199) {
        var menu = $('.vertical-category-menu');
        var logo = $('.header-logo');
        var posMenu = menu.offset();
        windowz.on("scroll", function () {
            if (windowz.scrollTop() > posMenu.top - 20) {
                logo.removeClass("animation-logo");
                menu.addClass('fix-menu animation-menu');
            } else {
                logo.addClass("animation-logo");
                menu.removeClass('fix-menu animation-menu');
            }
        });
        /* --- CUSTOMIZE ZOOM ELEVATE ----- */
        $("#img1").elevateZoom({
            gallery: 'gallery_01',
            cursor: "-webkit-zoom-in",
            zoomType: 'window',
            galleryActiveClass: "active",
            imageCrossfade: false,            
            zoomLens: true,
            lensZoom: true,
            zoomWindowWidth: 130,
            zoomWindowHeight: 130,
            responsive: true,
        });


        //pass the images to Fancybox
        $("#img1").bind("click", function (e) {
            var ez = $('#img1').data('elevateZoom');
            $.fancybox(ez.getGalleryList());
            return false;
        });
    } else {
        var menuWidth = $('.vertical-category-menu').width();        
        $('category-menu-list-item').children().css("width", menuWidth);

        $('#gallery_01').find('a[data-image]').on('click', function () {
            var o = $(this)
            var image = o.attr('data-image');
            $('.owl-item.active').removeClass('active');
            o.addClass('active');
            $('#img1.image-zoom-elevate').attr('src', image);
        });
    }
    $('.vertical-category-menu').click(function () {
        $('.category-menu-list-item').slideToggle('slow');
    });
} ());