'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('mainCtrl', ['$rootScope', '$scope', '$http', 'Home', '$location',
		function($rootScope, $scope, $http, Home, $location) {
			$scope.homeButtonClick = function() {
				// console.log('home button click');
			}
		}
	])
	.controller('articleCtrl', ['$scope', '$routeParams',
		function($scope, $routeParams) {
			var address = "articles/";
			address = address.concat($routeParams.name, '.html');
			$scope.srcAddress = address;
		}
	])
	.controller('loggingCtrl', ['$scope', 'Logging',
		function($scope, Logging) {

			var markdownContent = '';
			var htmlContent = '';
			var convert = function(content) {
				marked(content, function(err, content) {
					if (err) throw err;
					document.getElementById('show_panel').innerHTML = content;
				});
			};

			window.onload = function() {
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

					var loggingData = {
						'title': loggingDataTitle,
						'markdownContent': mdContent,
						'htmlContent': hContent
					}

					// var param = {};
					Logging.query(loggingData, function(data) {
						if (data.success) {
							alert('success');
						} else {
							alert('error');
						}
					});

				}
			});

		}
	])
	.controller('homeCtrl', ['$rootScope', '$scope', 'Home',
		function($rootScope, $scope, Home) {
			$scope.articleList = '';

			$scope.getArticleListFn = function() {
				Home.query({}, function(data) {
					if (data.content.length) {
						$scope.articleList = data.content;
						// alert('success');
					} else {
						// alert('error');
					}
				});
			}
			$scope.$watch('$viewContentLoaded', function() {
				$scope.getArticleListFn();
			});

			// $scope.$on('homeDataTransfer', function(data) {
			// 	console.log('--- home data transfer');
			// 	console.log(data);
			// });
		}
	]);