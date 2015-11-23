angular.module("gefi").factory("gerenteAPI", function($http, config) {
	var _chamaProximaSenha = function() {
		return $http.post(config.baseUrl + "/senha");
	};
	
	var _reiniciaSenhaNormal = function () {
		return $http.put(config.baseUrl + "/senha/N");
	}
	
	var _reiniciaSenhaPreferencial = function () {
		return $http.put(config.baseUrl + "/senha/P");
	}
	
	return {
		chamaProximaSenha: _chamaProximaSenha,
		reiniciaSenhaNormal: _reiniciaSenhaNormal,
		reiniciaSenhaPreferencial: _reiniciaSenhaPreferencial
	};
});