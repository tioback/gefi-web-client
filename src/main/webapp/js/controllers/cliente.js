angular.module("gefi").controller("clienteCtrl", function ($scope, $rootScope, $location, clienteAPI, ngToast) {
	$scope.geraSenhaNormal = function() {
		clienteAPI.geraSenhaNormal().then(mostraSenha, trataErro);
	};
	
	$scope.geraSenhaPreferencial = function() {
		clienteAPI.geraSenhaPreferencial().then(mostraSenha, trataErro);
	};
	
	var mostraSenha = function(response) {
		$rootScope.senhaGerada = response.data.codigo;
		$location.path("/senhaAtual")
	};
	
	var trataErro = function(response) {
		console.log("Erro ao gerar nova senha.");
		console.log(response);

		if (response.status < 0) {
			ngToast.danger({ content: "Erro. Você está conectado na internet?" });
		} else {
			ngToast.danger({ content: "Ocorreu um erro. Contate o suporte." });
		}
	};
});