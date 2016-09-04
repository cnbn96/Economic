'use strict';

angular.module('app').directive('psMenuGroup', function($window, $timeout){
    return {
        require: '^psMenu',
        replace: true,
        templateUrl: 'app/templates/psMenuGroupTemplate.html',
        controller: 'psMenuGroupController',
        scope: {
            label: '@',
            icon: '@',
        },
        link: function(scope, ele, attr, ctrl){
            scope.isOpen = false;
            
            scope.closeMenu = function(){
                scope.isOpen = false;
            }
            $timeout(function(){
                scope.isHorizontal = ctrl.isHorizontal();
            },0)

            angular.element($window).bind('resize', function () {
                scope.width = $window.innerWidth;
                scope.isHorizontal = scope.width >= 1200;
                if(scope.isHorizontal){
                    scope.isOpen = false;
                }
                scope.$digest();                
            });
            scope.subMenuMouseEnter = function(){
                if(scope.isHorizontal){
                    scope.isOpen = true;
                    scope.subMenuHover = true;    
                }
            }
            scope.subMenuMouseLeave = function(){
                if(scope.isHorizontal){
                    scope.isOpen = false;
                    scope.subMenuHover = false;    
                }
            }
            scope.subMenuClicked = function(){
                scope.isOpen = !scope.isOpen;
                ctrl.setOpenMenuScope(scope);
            }
        }
    };
});