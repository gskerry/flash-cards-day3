
app.controller('FormController', function ($scope) {

	$scope.showform = function(){
		// console.log($scope);
		$scope.$parent.newform = true;
		// $scope.submitFunc = function(){
		// 	$http.post(json).then().catch()
		// }
	};
});