'use strict';
angular.module('app').directive('psMenu',function(){
    return{
        restrict: 'E',
        controller: 'psMenuController',
        templateUrl: 'app/templates/psMenuTemplate.html',
        scope: {

        },
        transclude: true
    }
});