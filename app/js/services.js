'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
.factory('Logging', function($resource) {
	return $resource('logging/:action', {}, {
		query: {
			method: 'post',
			params: {},
			data: {},
			isArray: false,
			cache: true
		}
	});
})
.factory('Home', function($resource) {
	return $resource('home/:action', {}, {
		query: {
			method: 'get',
			params: {},
			data: {},
			isArray: false,
			cache: true
		}
	});
})
.factory('DataTransfer', function($rootScope, Home) {
	var transfer = {
		data: {},
		sendData: function(type, params) {
			switch (type) {
				case 'home' :
				// todo
				// Home.query({}, function(data) {
		  // 			if (data.content.length) {
		  // 				transfer.data[type] = data.content;

		  // 				console.log('>>>>>>>>>>>');
		  // 				console.log(data.content);

		  // 				$rootScope.$broadcast('homeDataGetted', transfer.data);
		  // 			} else {
		  // 				alert('error from service!');
		  // 			}
		  // 		});
				break;
				default :
				// todo
				break;
			}
		},
		recevieData: function(type) {
			return transfer.data[type];
		}
	};
	return transfer
})
;
