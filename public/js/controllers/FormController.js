
app.controller('FormController', function ($scope) {
	
	$scope.newform = false;

	$scope.showform = function(){
		$scope.newform = true;
		console.log("FORMCONTROLLER CALLED")
	};
});