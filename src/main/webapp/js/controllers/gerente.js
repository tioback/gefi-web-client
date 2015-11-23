angular.module("gefi").controller("gerenteCtrl", function ($scope, gerenteAPI, ngToast) {
	var _mostraMsgErroGenerico = function() {
		ngToast.danger({ content: "Ocorreu um erro. Contate o suporte." });
	};
	
	var _mostraMsgNenhumaSenhaNaFila = function() {
		ngToast.info({ content: "Nenhuma senha na fila." });
	};
	
	var _mostraMsgErroSemRede = function() {
		ngToast.danger({ content: "Erro. Você está conectado na internet?" });
	}
	
	$scope.chamaProximaSenha = function () {
		gerenteAPI.chamaProximaSenha().then(function(response) {
			$scope.senhaChamada = response.data.codigo;
		}, function(response) {
			console.log(response);
			if (response.status < 0) {
				console.log("Sem rede.");
				_mostraMsgErroSemRede();
			} else if (response.status == 404) {
				_mostraMsgNenhumaSenhaNaFila();
			} else {
				console.log("Erro ao chamar próxima senha.");
				_mostraMsgErroGenerico();
			}
		});
	};
	
	$scope.reiniciaSenhaNormal = function () {
		gerenteAPI.reiniciaSenhaNormal().then(function(response) {
			ngToast.success({ content: "Senha normal reiniciada." });
		}, function(response) {
			console.log("Erro ao reiniciar senha normal.")
			console.log(response);
			if (response.status < 0) {
				_mostraMsgErroSemRede();
				console.log(response);
			} else {
				_mostraMsgErroGenerico();
			}
		});
		
	};
	
	$scope.reiniciaSenhaPreferencial = function () {
		gerenteAPI.reiniciaSenhaPreferencial().then(function(response) {
			ngToast.success({ content: "Senha preferencial reiniciada." });
		}, function(response) {
			console.log("Erro ao reiniciar senha preferencial.")
			console.log(response);
			if (response.status < 0) {
				_mostraMsgErroSemRede();
				console.log(response);
			} else {
				_mostraMsgErroGenerico();
			}
		});
	};
	
});