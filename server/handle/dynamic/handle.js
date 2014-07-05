var fs = require('fs');

function undefined(response, data) {
	response.writeHead(404, {
		"Content-Type": "text/plain"
	});
	response.write("404 Not found");
	response.end();
};

function home(response, data) {
	var path = './data';
	var returnData = {
		"success": false,
		"content": []
	};

	fs.readdir(path, function(err, content) {
		if (err) {
			throw err;
		} else {
			returnData.success = true;
			returnData.content = content;

			returnData = JSON.stringify(returnData);
			response.write(returnData);
			response.end();
		}
	});
};

function logging(response, data) {
	var returnData = {
		"success": false,
	};

	fs.writeFile('./data/' + data.title + '.markdown', data.markdownContent, function(err, content) {
		if (err) {
			throw err;
		} else {
			fs.writeFile('./data/' + data.title + '.html', data.htmlContent, function(err, content) {
				if (err) {
					throw err;
				} else {
					returnData.success = true;

					returnData = JSON.stringify(returnData);
					response.write(returnData);
					response.end();
				}
			});
		}
	});
};

exports.logging = logging;
exports.home = home;
exports.undefined = undefined;