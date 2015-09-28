var ngMadLibApp = angular.module('ngMadLibApp', ['ngAnimate']);

ngMadLibApp.controller("ngMadLibCtrl", function($scope) {
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
		} else {
			console.log("Invalid!");
		}
	};
	$scope.restart = function() {
		$scope.madLibForm.$setPristine();
	}
});