'use strict';
angular.module('app').directive('psMenuItem', function(){
    return {
        restrict: 'E',
        required: '^psMenu',
        controller: 'psMenuItemController',
        template:'app\templates\psMenuItemTemplate.html',
        scope: {
            label: '@',
            icon: '@'
        },
        link: function(scope, ele, attr, ctrl){
            
        }
    };
})