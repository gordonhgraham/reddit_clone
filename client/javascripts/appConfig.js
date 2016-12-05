'use strict'
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'views/posts.html',
            controller: 'PostsController'
        })
        // .state('shows.detail', {
        //     url: '/detail/:id',
        //     templateUrl: 'templates/shows-detail.html',
        //     controller: 'ShowsDetailController'
        // });
}]);
