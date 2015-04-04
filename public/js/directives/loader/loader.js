
app.directive('loader', function(){
	console.log('SOMETHING HERE')
	return {
		restrict: 'E',
		templateUrl: 'js/directives/loader/loader.html'
		/*template: '<h1>Our Loader should be here</h1>'*/
	}
});