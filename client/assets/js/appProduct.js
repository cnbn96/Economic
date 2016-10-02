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
            scrollZoom: true,
            zoomLens: true,
            lensZoom: true,
            zoomWindowWidth: 200,
            zoomWindowHeight: 200,
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
        console.log(menuWidth);
        $('category-menu-list-item').children().css("width", menuWidth);

        $('#gallery_01').find('a[data-image]').on('click', function(){
            var o = $(this)            
            var image = o.attr('data-image');
            $('.owl-item.active').removeClass('active');
            o.addClass('active');            
            $('#img1.image-zoom-elevate').attr('src',image);
        });
    }
    $('.vertical-category-menu').click(function () {
        $('.category-menu-list-item').slideToggle('slow');
    });
} ());