(function () {
    'use strict';

    angular.module('app').directive('psMenuMegaList', function ($window, $timeout) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                byBrands: '@'
            },
            templateUrl: "app/menu/templates/psMenuMegaListTemplate.html",
            link: function (scope, ele) {

            }
        }
    });
} ());