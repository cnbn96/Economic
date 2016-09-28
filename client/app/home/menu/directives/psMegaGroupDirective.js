(function () {
    'use strict';

    angular.module('app').directive('psMegaGroup', function ($window, $timeout) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                listItems: '='
            },
            templateUrl: "app/home/menu/templates/psMegaGroupTemplate.html"
        }
    });
} ());