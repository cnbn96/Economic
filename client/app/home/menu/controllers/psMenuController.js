angular.module('app').controller('psMenuController', function ($scope, $timeout, $rootScope, $window) {
    $scope.isMenuVisible = false;
    $scope.isMenuButtonArrowVisible = false;
    $scope.isHorizontal = true;
    $scope.openMenuScope = null;

    $($window).on("resize.psMenu", function () {
        $scope.$apply(function () {
            checkWidth();
        });
    });
    $timeout(function () {
        $scope.$apply(function () {
            checkWidth();
        });
    }, 0);

    this.setOpenMenuScope = function(scope){
        $scope.openMenuScope = scope;
    };
    this.isMenuVisible = function () {
        return $scope.isMenuVisible;
    };
    this.isHorizontal = function () {
        return $scope.isHorizontal;
    }
    $scope.menuButtonArrowClicked = function () {
        $scope.isMenuVisible = !$scope.isMenuVisible;
    }

    var checkWidth = function () {
        var width = Math.max($($window).width(), $window.innerWidth);
        console.log("checkWIDTH: " + width)
        $scope.isHorizontal = width >= 1200;
        $scope.isMenuButtonArrowVisible = !$scope.isHorizontal;
        $rootScope.$broadcast('is-horizontal', {
            isHorizontal : $scope.isHorizontal
        });    
    };
    angular.element('.submenu').bind('hover',function(e){
        checkWidth();
        if($scope.isHorizontal){
            if($(e.target).siblings('.dropdown-submenu')){

            }
        }
    });
    

});