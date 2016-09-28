(function () {
    'use strict';
    angular.module('app').directive('psMenuItem', function () {
        return {
            restrict: 'E',
            required: '^psMenu',
            templateUrl: 'app/home/menu/templates/psMenuItemTemplate.html',
            scope: {
                label: '@',
                icon: '@'
            },
            link: function (scope, ele, attr, ctrl) {

            }
        };
    })
} ());
