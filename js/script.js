var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
var source = "http://placehold.it/250x250";

	$scope.gallery = [];
	for(i=0; i<16; i++){
		$scope.gallery.push(
			{
				path: source
			}
		);
	}
	console.log($scope.gallery);
});