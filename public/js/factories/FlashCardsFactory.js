app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data;
            });

        },

        postFlashCards: function (userInput) {
            return $http.post('/cards', {
                question: "How do we build this object?",
                category: "MongoDB",
                answers: [
                    { text: "With magic", correct: false },
                    { text: "With wizardry", correct: false },
                    { text: "With ng-model", correct: true }
                ]
            }).success(function(response) {
                console.log('RESPONSE' + response);
            }).catch(function(err)
            {
                
                console.log(err);
            });
        }

    };

});
