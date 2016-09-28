(function () {
    'use strict';

    angular.module('app.Product').directive('psProduct', function () {
        return {
            restrict: 'E',
            scope: {
                products: '=',
                catName: '@',
                sliderName: '@'
            },
            templateUrl: "app/product/templates/psProductTemplate.html",
            controller: function ($interval, $scope, $window) {
                $interval(function () {
                    $('.' + $scope.sliderName).carousel({
                        visible: 3,
                        itemMinWidth: 250,
                        itemEqualHeight: 400
                    });
                    $scope.isProductVertical = $window.innerWidth < 992;
                }, 0, 1);
                angular.element($window).bind('resize', function () {
                    $scope.isProductVertical = $window.innerWidth < 992;                    
                    $scope.$digest();
                });
                $('.toggle-nav').click(function () {
                    var o = $(this);
                    var navList = o.next();                   
                    navList.slideToggle('slow')
                });
            },
        }
    });
} ());