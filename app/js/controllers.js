'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('articleCtrl', [function() {

  }])
  .controller('loggingCtrl', ['$scope', 'Logging', function($scope, Logging) {

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


	$('#logging textarea').keydown(function(event) {

		// save function
		if (event.keyCode === 83 && event.ctrlKey) {
			event.preventDefault();
			event.stopPropagation();

			var loggingDataTitle = '';
			var mdContent = document.getElementById('editor').value;
			var hContent = document.getElementById('show_panel').innerHTML;


			var regExp = /^\[.*\]/;
			loggingDataTitle = (regExp.exec(mdContent))[0].replace(/[\[]/, '');
			loggingDataTitle = loggingDataTitle.replace(/[\]]/, '');

			// var param = {};
			// var loggingData = document.getElementById('show_panel').innerHTML;
			var loggingData = {
				'title': loggingDataTitle,
				'markdownContent': mdContent,
				'htmlContent': hContent
			}

			Logging.query(loggingData, function(data) {
				if (data.success) {
					alert('success');
				} else {
					alert('error');
				}
			});

		}
	});

  }])
  .controller('homeCtrl', [function() {

  }]);
