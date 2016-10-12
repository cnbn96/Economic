(function () {
    'use strict';

    angular.module('app').directive('productCategoryMenu', function ($window, $timeout) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: "app/product/templates/productCategoryMenuTemplate.html",
            link: function (scope, ele, attr) {
                var windowz = $($window);
                var windowWidth = Math.max(windowz.width(), $window.innerWidth);
                var menu = $('.vertical-category-menu');
                var logo = $('.header-logo');
                var posMenu = menu.offset();
                $timeout(function () {
                    scope.checkWidthz();
                }, 0);

                windowz.on('resize.main', function (e) {
                    windowWidth = Math.max(windowz.width(), $window.innerWidth);
                    console.log("CATE DR: " + windowWidth);
                    scope.checkWidthz();
                    e.preventDefault();
                    e.stopPropagation();
                });
                //Khi window width lớn hơn 1199px thì sẽ chạy windowz.on('scroll')
                scope.checkWidthz = function () {
                    if (windowWidth > 1199) {
                        windowz.on("scroll.main", function () {
                            if (windowz.scrollTop() && menu.length) {
                                console.log("menu exist: " + menu.length);
                                logo.hide();
                                menu.addClass('fix-menu animation-menu');
                            } else {
                                logo.show();
                                menu.removeClass('fix-menu animation-menu');
                            }
                        });
                    } else {
                        logo.show();
                        menu.removeClass('fix-menu animation-menu');
                        windowz.unbind('scroll');
                    }
                };
                ele.on('click', function (e) {
                    $('.category-menu-list-item').slideToggle('slow');
                    e.preventDefault();
                    e.stopPropagation();
                });
                $('.category-item .toggle-nav').click(function (e) {
                    var o = $(this);
                    var navList = o.next();
                    navList.slideToggle('slow', function () {
                        o.find('.show-nav').toggleClass('fa-chevron-down fa-times');
                    });
                    e.preventDefault();
                    e.stopPropagation();
                });
            }
        }
    });
} ());