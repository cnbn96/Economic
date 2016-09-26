(function () {
    angular.module('app.Product').controller('psProductCtrl',
        ['$scope', '$interval', function ($scope, $interval) {
           $interval(function () {
                $('.comming').carousel({
                    visible: 4,
                    itemMinWidth: 250,
                    itemEqualHeight: 400,
                    itemMargin: 10,
                });
            }, 0, 1);
        }]);
} ());