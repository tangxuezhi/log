// system dependency
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var querystring = require('querystring');

// own dependency
var config = require("./config/config");
var staticHandle = require('./handle/static/handle').handle;
var route = require("./route/route");

var parseData = function(data) {
    if (data && typeof data === 'string') {
        data = JSON.parse(data);
    }
    return data;
};

function start() {
    var server = http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        if (pathname.slice(-1) === "/") {
            pathname = pathname + config.entryPoint.file;
        }

        var ext = path.extname(pathname);
        if (config.asserts.fileMatch.test(ext.toLowerCase())) {
            // handle app asserts request, these file always end by .js, .css, .html or other format suffix
            staticHandle(request, response, pathname);
        } else {
            // handle ajax request
            if (request.method == 'GET') {
                var getData = url.parse(request.url, true).query;
                getData = parseData(getData);
                route.route(route.handle, pathname, response, getData);
            } else if (request.method == 'POST') {
                var postData = '';
                request.on('data', function(chunk) {
                    postData += chunk;
                }).on("end", function() {
                    postData = parseData(postData);
                    route.route(route.handle, pathname, response, postData);
                });
            }
        }
    });
    server.listen(config.server.port);
    console.log('Server running at http://' + config.server.address + ':' + config.server.port + '/');
};

exports.start = start;