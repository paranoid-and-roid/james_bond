myApp

	.controller('MainController', ['$scope', "bondService", function($scope, bondService) {
		bondService.list(function(response){
			$scope.films = response;
		});
	}])
	.controller('DetailCtrl', ['$scope', 'bondService', '$stateParams', function($scope, bondService, $stateParams) {
		bondService.detail($stateParams.title, function(response) {
			$scope.film = response;
			console.log(response);
		});
	}]);
	