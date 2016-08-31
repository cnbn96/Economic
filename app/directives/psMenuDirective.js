'use strict';
angular.module('app').directive('psMenu',function(){
    return{
        restrict: 'E',
        controller: 'psMenuController',
        template: 'app\templates\psMenuTemplate.html',
        scope: {

        },
        transclude: true
    }
});