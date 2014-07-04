var fs = require('fs');

function undefined(response, data) {
	response.writeHead(404, {
		"Content-Type": "text/plain"
	});
	response.write("404 Not found");
	response.end();
};

function parse(response, data) {
	// console.log(typeof data.content);
	// console.log(data.content);
	// response.writeHead(200, {
	// 	"Content-Type": "text/plain"
	// });
	fs.writeFile('./data/content.md', data.content, function(err, content) {
		if (err) throw err;
		console.log(content);
	});

	response.write("parse process");
	response.end();
};

exports.parse = parse;
exports.undefined = undefined;
