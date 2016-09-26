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
            controller: function ($interval, $scope) {
                $interval(function () {
                    $('.' + $scope.sliderName).carousel({
                        visible: 3,
                        itemMinWidth: 250,
                        itemEqualHeight: 400
                    });
                }, 0, 1);
            },
        }
    });
} ());