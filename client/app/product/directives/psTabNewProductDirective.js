(function () {
    'use strict';

    angular.module('app.Product').directive('psTabNewProduct', function () {
        return {
            restrict: 'E',
            scope: {
                commingProducts: '=',
                bestSellerProducts: '='
            },
            templateUrl: "app/product/templates/psTabNewProductTemplate.html",
            controller: "psTabNewProductCtrl"
            
        }
    });
} ());