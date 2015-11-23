angular.module("gefi").config(function($routeProvider) {
	$routeProvider.when("/inicio", {
		templateUrl: "view/inicio.html"
	});
	$routeProvider.when("/cliente", {
		templateUrl: "view/cliente.html",
		controller: "clienteCtrl"
	});
	$routeProvider.when("/gerente", {
		templateUrl: "view/gerente.html",
		controller: "gerenteCtrl"
	});
	$routeProvider.when("/senhaAtual", {
		templateUrl: "view/senhaAtual.html",
		controller: "visualizadorCtrl",
		resolve: {
			ultimaSenha : function (visualizadorAPI) {
				return visualizadorAPI.ultimaSenhaChamada();
			}
		}
	});
	$routeProvider.otherwise("/inicio");
});