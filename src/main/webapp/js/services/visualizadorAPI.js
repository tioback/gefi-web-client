angular.module("gefi").factory("visualizadorAPI", function($http, config, webSocketClientFactory) {
	var _webSocketClient = null;
	
	var _monitoraChamadaSenhas = function(reader) {
		_webSocketClient = webSocketClientFactory.criaCliente({
			url: config.baseUrl + "/ultimaSenha",
			topic: "/topic/senha",
			callback: reader
		});
		_webSocketClient.conecta();
		console.log("Monitoramento iniciado.");
	};
	
	var _cancelaMonitoramento = function() {
		_webSocketClient.disconecta();
		console.log("Monitoramento encerrado.");
	};
	
	var _ultimaSenhaChamada = function() {
		return $http.get(config.baseUrl + "/senha").then(function(response) {
			return response.data.codigo;
		});
	}
	
	return {
		monitoraChamadaSenhas: _monitoraChamadaSenhas,
		cancelaMonitoramento: _cancelaMonitoramento,
		ultimaSenhaChamada: _ultimaSenhaChamada
	};
});