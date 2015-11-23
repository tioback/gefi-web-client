angular.module('gefi').config([ 'ngToastProvider', function(ngToast) {
	ngToast.configure({
		verticalPosition : 'top',
		horizontalPosition : 'center'
	});
} ]);