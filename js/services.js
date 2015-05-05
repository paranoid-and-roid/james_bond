myApp

	.factory("bondService", ["$http", function($http) {

	var cachedData;
	
		function getData(callback) {
			if(cachedData) {
				callback(cachedData);
			} else {
				$http.get('bond.json').success(function(data) {
					cachedData = data;
					callback(data);
				});
			}
		}

	return {
		list: getData,
		detail: function(title, callback) {
			getData(function(data) {
				var film = data.filter(function(entry) {
					return entry.title === title;
				})[0];
				callback(film);
			});
		}
	};
}]);
