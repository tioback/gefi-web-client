angular.module("gefi").controller("visualizadorCtrl", function($scope, visualizadorAPI, ultimaSenha) {
	
	var confereSenha = function() {
		$scope.ultimaSenha = ultimaSenha;
		visualizadorAPI.monitoraChamadaSenhas(function (senha) {
			$scope.$apply(function () {
				$scope.ultimaSenha = senha.codigo;
			});
		});
	};
	
	$scope.$on("$destroy", function() {
		visualizadorAPI.cancelaMonitoramento();
	});
	
	confereSenha();
	
});