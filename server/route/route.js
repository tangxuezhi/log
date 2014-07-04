var dynamicHandle = require("./../handle/dynamic/handle");

var handle = {};
handle['/logging'] = dynamicHandle.logging;
handle['/undefined'] = dynamicHandle.undefined;

function route(handle, pathname, response, postData) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData);
	} else {
		handle['undefined']();
	}
}

exports.route = route;
exports.handle = handle;