(function () {
    var windowz = $(window);
    var windowWidth = Math.max(windowz.width(), windowz.innerWidth());

    if (windowWidth > 1199) {
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
    $('.vertical-category-menu .title').click(function () {
        $('.category-menu-list-item').slideToggle('slow');
    });
    $('.category-item .toggle-nav').click(function () {
        var o = $(this);
        var navList = o.next();
        navList.slideToggle('slow', function () {
            o.find('.show-nav').toggleClass('fa-chevron-down fa-times');
        });
    });
} ());