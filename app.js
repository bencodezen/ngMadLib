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
	});