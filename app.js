var ngMadLibApp = angular.module('ngMadLibApp', [])
	.controller("ngMadLibCtrl", function($scope) {
		$scope.name = '';
		$scope.gender = '';
		$scope.jobTitle = '';
		$scope.tediousTask = '';
		$scope.dirtyTask = '';
		$scope.celebrity = '';
		$scope.uselessSkill = '';
		$scope.adjective = '';
		$scope.obnoxiousCelebrity = '';
		$scope.hugeNumber = '';
		$scope.submit = function() {
			if ($scope.madLibForm.$valid) {
				console.log("Valid!");
				document.getElementById("user-input").style.display = 'none';
				document.getElementById("content").style.display = 'block';
			} else {
				console.log("Invalid!");
			}
		};
		$scope.restart = function() {
			document.getElementById("content").style.display = 'none';
			document.getElementById("user-input").style.display = 'block';
		}
	});