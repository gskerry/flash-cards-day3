
app.directive('flashCard', function(ScoreFactory){
	// Argument Order doesn't matter 
	// ARgument names must be the correct application names. NAMES MATTER.
	return {
		restrict: 'E',
		scope: {card: '='},
		templateUrl: 'js/directives/flash-card/flash-card.html',
		link: function(scope, element, attrs){
			// parameter ORDER MATTERS
			// first arg is the external scope
			// Here, being in an ng-repeat... is getting passed the scope of each repeat... 
			// $scope is more like jQ found and injected 'scope' 
			// $scope is an existing, 'looked-up' scope that is pulled and then passed in... 

		    scope.answered = false;
		    scope.answeredCorrectly = null;

		    scope.answerQuestion = function (answer) {

		        if (scope.answered) {
		            return;
		        }

		        scope.answered = true;
		        scope.answeredCorrectly = answer.correct;

		        if (answer.correct) {
		            ScoreFactory.correct++;
		        } else {
		            ScoreFactory.incorrect++;
		        }

		    };

		}
	}
});