
app.directive('hoverBorder', function(){

	return {
			restrict: 'A',
			link: function(scope, element, attrs){
				element.on('mouseover', function(){
					element.addClass("hover");
				})
				element.on('mouseleave', function(){
					element.removeClass("hover");
				})
			}
		}

});