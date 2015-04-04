
app.directive('flashCard', function(ScoreFactory){
	return {
		restrict: 'E',
		scope: {card: '='},
		templateUrl: 'js/directives/flash-card/flash-card.html',
		link: function(scope, element, attrs){
			// first arg is the external scope
			// $scope is more like jQ found and injected 'scope' 

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