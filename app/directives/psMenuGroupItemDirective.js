'use strict';

angular.module('app').directive('psMenuGroupItem', function(){
    return {
        restrict: 'E',
        required: '^psMenu',
        transclude: true,
        template: 'app/templates/psMenuGroupItemTemplate.html',
        controller: 'psMenuGroupItemController',
        scope: {
            label: '@',
            icon: '@'
        },
        link: function(scope, ele, attr, ctrl){

        }
    };
});