(function () {
    'use strict';

    angular.module('app').directive('psCrslItem', function () {
        return {
            restrict: 'E',
            scope: {
                brandUrl: '@',
                name: '@'
            },
            templateUrl: "app/product/templates/psCrslItemTemplate.html"
        }
    });
} ());