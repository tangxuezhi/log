'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('articleCtrl', [function() {

  }])
  .controller('loggingCtrl', [function() {
  	var markdownContent = '';
	var htmlContent = '';
	var convert = function(content) {
		marked(content, function(err, content) {
			if (err) throw err;
			document.getElementById('show_panel').innerHTML = content;
		});
	};

	window.onload =function() {
		markdownContent = document.getElementById('editor').value
		if (markdownContent) {
			convert(markdownContent);
		}
	};

	document.getElementById('editor').addEventListener('keyup', function() {
		markdownContent = document.getElementById('editor').value;
		convert(markdownContent);
	});
  }])
  .controller('homeCtrl', [function() {

  }]);
