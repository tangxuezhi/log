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
				cache: false
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
				cache: false
			}
		});
	})
	// .factory('DataTransfer', function($rootScope, Home) {
	// 	var transfer = {
	// 		data: {},
	// 		start: function(type, params) {
	// 			switch (type) {
	// 				case 'home':
	// 					Home.query({}, function(data) {
	// 						if (data.content.length) {
	// 							transfer.data[type] = data.content;
	// 							$rootScope.$broadcast('homeDataTransfer', transfer.data[type]);
	// 						} else {
	// 							alert('error from service!');
	// 						}
	// 					});
	// 					break;
	// 				default:
	// 					// todo
	// 					break;
	// 			}
	// 		},
	// 		recevieData: function(type) {
	// 			return transfer.data[type];
	// 		}
	// 	};
	// 	return transfer
	// });