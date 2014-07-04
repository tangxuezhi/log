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
;
