var app = angular.module('app');
app.config(function($stateProvider, $urlRouterProvider){
    //For any unmatched URL
    $urlRouterProvider.otherwise("/");

    //Set up the state

    $stateProvider
        .state('home',{
            url: "/",
            templateUrl: 'app/home/homeTemplate.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        /*.state('product',{
            url:"product/:productName",
            templateUrl:'product/productPage.html',
        })
        .state('category',{
            url:"category/:categoryName",
            templateUrl:'category/categoryPage.html',
        })
        .state('feature',{
            url:"feature/:featureName",
            templateUrl:'feature/featurePage.html',
        })
        .state('allBrands',{
            url:"brands/:allBrands",
            templateUrl:'categorybrands/allBrandsPage.html',
        })
        .state('brand',{
            url:"brand/:brandName",
            templateUrl:'brand/brandPage.html',
        })
        .state('post',{
            url:"post/:postName",
            templateUrl:'post/postPage.html',
        })*/    
        
});