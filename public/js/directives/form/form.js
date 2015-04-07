
app.directive('newForm', function($http, FlashCardsFactory){

var jsonObj = {};

	return {
		restrict: 'E',
		templateUrl: 'js/directives/form/form.html',
		link: function(scope, element, attr, d){
			element.on("submit", function(){
			
				console.log("d: ",d);

				jsonObj.question = scope.question;
				jsonObj.category = scope.category;
				jsonObj.answers = [
		        { text: scope.answer_1, correct: false },
		        { text: scope.answer_2, correct: false },
		        { text: scope.answer_3, correct: true }
				]



			// console.log("scope.question: ",scope.question);
			// console.log(scope.question);			
			// ourForm.input.$valid

			//jsonObj = {question: scope.question};	
			/*			
				jsonObj = {
			    "question": "How do we build this object?",
			    "category": "MongoDB",
			    "answers": [
		        { text: "With magic", correct: false },
		        { text: "With wizardry", correct: false },
		        { text: "With ng-model", correct: true }
				]
				};
			*/

				console.log(jsonObj);
				FlashCardsFactory.postFlashCards(jsonObj);
			});
		}
	}

});