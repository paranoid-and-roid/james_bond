myApp

	.controller('MainController', ['$scope', "bondService", '$stateParams', '$sce', function($scope, bondService, $stateParams, $sce) {
		bondService.sideList(function(response){
			$scope.films = response;
		});

		bondService.filmDetail($stateParams.title, function(response) {
			$scope.film = response;

		$scope.trustSource = function(src) {
			return $sce.trustAsResourceUrl(src);
			};

        });
	}]);