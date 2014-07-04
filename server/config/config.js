exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css)$/ig,
    maxAge: 60*60*24*365
};

exports.Compress = {
    match: /css|js|html/ig
};

exports.entryPoint = {
    file: "index.html"
};

exports.asserts = {
    fileMatch: /^.html$|^.css$|^.js$|^.json$|^.xml$|^.ico$/
};

exports.server = {
	'address': 'localhost',
	'port': 8888
};