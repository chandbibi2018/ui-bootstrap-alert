var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

 app.controller('AlertCtrl', function($scope){

 	$scope.alert={};
 	$scope.alert.type="info";
 	$scope.alert.message="info dynamic alert";

 	$scope.show=true;
 	$scope.close = function(){
 		$scope.show=false;
 	};

 	$scope.showAlert=true;
 	$scope.closeAlert = function(){
 		$scope.showAlert=false;
 	};
});
