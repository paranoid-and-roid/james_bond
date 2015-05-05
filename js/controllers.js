myApp

	.controller('MainController', ['$scope', "bondService", function($scope, bondService) {
		bondService.list(function(response){
			$scope.films = response;
		});
	}])
	.controller('DetailCtrl', ['$scope', 'bondService', '$stateParams', '$sce', function($scope, bondService, $stateParams, $sce) {
		bondService.detail($stateParams.title, function(response) {
			$scope.film = response;
			
		$scope.trustSrc = function(src) {
    		return $sce.trustAsResourceUrl(src);
  			};

		});
	}]);
	