angular.module("gefi").factory("clienteAPI", function($http, config) {
	
	var _geraSenhaNormal = function() {
		return $http.post(config.baseUrl + "/senha/N")
	};
	
	var _geraSenhaPreferencial = function () {
		return $http.post(config.baseUrl + "/senha/P");
	}
	
	return {
		geraSenhaNormal: _geraSenhaNormal,
		geraSenhaPreferencial: _geraSenhaPreferencial
	};
});