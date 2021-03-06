(function () {
    'use strict';
    angular.module('app').directive('psMenu', function ($window) {
        return {
            restrict: 'E',
            controller: 'psMenuController',
            templateUrl: 'app/home/menu/templates/psMenuTemplate.html',
            scope: {

            },
            transclude: true,
            link: function (scope, ele, attr) {
                angular.element($window).bind('resize', function () {
                    scope.width = $window.innerWidth;
                    scope.$digest();
                });
            }

        }
    });
} ());