angular.module("webSocketClientFactory", []);
angular.module("webSocketClientFactory").provider("webSocketClientFactory", function() {

	function WebSocketClient(config) {
		var _stompClient = Stomp.over(new SockJS(config.url));
		
		this.conecta = function() {
			_stompClient.connect({}, function(frame) {
				_stompClient.subscribe(config.topic, function(message) {
					config.callback.apply(this, [ JSON.parse(message.body) ]);
				});
			});
		};
		
		this.disconecta = function() {
			_stompClient.disconnect();
		}
	}
	
	var _criaClient = function(config) {
		return new WebSocketClient(config);
	}
	
	this.$get = function() {
		return {
			criaCliente: _criaClient
		}
	}
	
});