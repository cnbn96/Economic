(function () {
    angular.module('app.Product').controller('psTabNewProductCtrl',
        ['$scope', '$timeout', function ($scope, $interval) {
            $scope.tab = 1;
            var test = true;

            $scope.setTab = function (newVal) {
                $scope.tab = newVal;
                if (test && newVal == 2) {
                    test = false;
                    $scope.check();
                }
            };
            $scope.check = function () {
                $interval(function () {
                    $('.bestsellers').carousel({
                        visible: 4,
                        itemMinWidth: 250,
                        itemEqualHeight: 400,
                        itemMargin: 10,
                    });

                }, 0, 1);
                $interval(function () {
                    $('.tab-loader').fadeOut('slow');
                }, 500, 1)
            };
            $scope.isSet = function (tabNum) {
                return $scope.tab === tabNum;
            }
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