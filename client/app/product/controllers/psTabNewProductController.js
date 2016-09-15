(function () {
    angular.module('app.Product').controller('psTabNewProductCtrl',
        ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.tab = 1;

            $scope.setTab = function (newVal) {
                $scope.tab = newVal;
                if ($scope.tab === 2) {
                    $timeout(function () {
                        $('.bestsellers').carousel({
                            visible: 4,
                            itemMinWidth: 250,
                            itemEqualHeight: 400,
                            itemMargin: 10,
                        });
                    }, 0);
                }
            }
            $scope.isSet = function (tabNum) {
                return $scope.tab === tabNum;
            }
            $timeout(function () {
                $('.comming').carousel({
                    visible: 4,
                    itemMinWidth: 250,
                    itemEqualHeight: 400,
                    itemMargin: 10,
                });
            }, 0);
        }]);
} ());