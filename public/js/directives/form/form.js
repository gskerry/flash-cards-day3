
app.directive('newForm', function($http, FlashCardsFactory){

var jsonObj = {};

	return {
		restrict: 'E',
		templateUrl: 'js/directives/form/form.html',
		link: function(scope, element, attr){
			element.on("submit", function(){
				//jsonObj = {question: scope.question};
				jsonObj = {
    "question": "How do we build this object?",
    "category": "MongoDB",
    "answers": [
        { text: "With magic", correct: false },
        { text: "With wizardry", correct: false },
        { text: "With ng-model", correct: true }
    ]
};
				console.log(jsonObj);
				FlashCardsFactory.postFlashCards(jsonObj);
				console.log('WTF');

			});
		}
	}

});