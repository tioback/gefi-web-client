angular.module("gefi").directive("uiAlert", function() {
	return {
		templateUrl: "view/alert.html",
		restrict: "AE",
		scope: {
			title: "@",
			message: "="
		}
	};
});