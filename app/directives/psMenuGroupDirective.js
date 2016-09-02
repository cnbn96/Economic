'use strict';

angular.module('app').directive('psMenuGroup', function(){
    return {
        restrict: 'E',
        required: '^psMenu',
        replace: true,
        templateUrl: 'app/templates/psMenuGroupTemplate.html',
        controller: 'psMenuGroupController',
        scope: {
            label: '@',
            icon: '@'
        },
        link: function(scope, ele, attr, ctrl){

        }
    };
});