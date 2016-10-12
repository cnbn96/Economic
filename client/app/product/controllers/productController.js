
(function () {
    angular.module('app').controller('productController',
        ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {
            /*var windowz = $($window);
            var windowWidth = Math.max(windowz.width(), $window.innerWidth);
            var menu = $('.vertical-category-menu');
            var logo = $('.header-logo');
            var posMenu = menu.offset();
            $timeout(function () {
                $scope.checkWidthz();
            }, 0);

            windowz.on('resize.main', function (e) {
                windowWidth = Math.max(windowz.width(), $window.innerWidth);
                $scope.checkWidthz();
                e.preventDefault();
                e.stopPropagation();    
            });
            $scope.checkWidthz = function () {
                windowz.on("scroll.main", function () {
                    if (windowWidth > 1199) {
                        if (windowz.scrollTop()) {
                            logo.hide();
                            menu.addClass('fix-menu animation-menu');
                        } else {
                            logo.show();
                            menu.removeClass('fix-menu animation-menu');
                        }
                    }
                });
            };*/
        }]);
} ());