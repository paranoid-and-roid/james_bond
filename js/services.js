myApp

	.factory("bondService", ["$http", function($http) {
		
	function listActors(callback) {
		$http({
			method: 'GET',
			url: 'bond_actors.json',
			cache: true
		}).success(callback);
	};
	
	function listFilms(callback) {
		$http({
			method: 'GET',
			url: 'bond.json',
			cache: true
		}).success(callback);
	};

	return {
		sideList: listActors, 
		mainList: listFilms,
		filmDetail: function(title, callback) {
			listFilms(function(data) {
				var film = data.filter(function(entry) {
					return entry.title === title;
				})[0];
				callback(film);
			});
		}
	};
}]);
