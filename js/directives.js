myApp

.directive("dropWhenHoveredOver", function() {
	
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind("mouseenter", function() {
			alert('Hello')
				$("dd." + scope.film.id).slideDown();
				$.apply();
			});
			/*
			element.bind("mouseleave", function() {
				$("dd").slideUp();
				$.apply();
			});
			*/
		}
	};
	
});
