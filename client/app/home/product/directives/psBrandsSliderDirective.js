(function () {
    'use strict';

    angular.module('app').directive('psBrandsSlider', function () {
        return {
            restrict: 'E',
            scope: {
                brands: '=',
                sliderName: '@',
                catName: '@'
            },
            templateUrl: "app/home/product/templates/psBrandsSliderTemplate.html",
            controller: function ($interval, $scope) {
                $interval(function () {
                    $('.' + $scope.sliderName).carousel({
                        visible: 6,
                        itemMinWidth: 96.92,
                        itemEqualHeight: 65,
                        itemMargin: 0,
                    });
                }, 0, 1);
            }
        }
    });
} ());