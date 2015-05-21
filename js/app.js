var myApp = angular.module("myApp", ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

	$stateProvider
		.state('home', {
			abstract: true,		
			templateUrl: 'templates/home.html',
			controller: 'MainController'
		})
		.state('home.main', {
			url: '/',
			templateUrl: 'templates/home.main.html',
			controller: 'MainController'
		})
		.state('home.detail', {
			url: '/{title}',
			templateUrl: 'templates/home.detail.html',
			controller: 'MainController'
		});

	$urlRouterProvider.otherwise('/');
}]);
