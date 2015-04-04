app.controller('MainController', function ($scope, FlashCardsFactory) {

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.chosenCategory = 'All';

    $scope.getAllCards = function () {
        $scope.loading = true;
        $scope.chosenCategory = 'All';
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.flashCards = cards;
        }).then(function(){$scope.loading = false;});
    };

    $scope.getCategoryCards = function (category) {
            
        $scope.loading = true;

        $scope.chosenCategory = category;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.flashCards = cards;  
        }).then(function(){$scope.loading = false;});
    };

    $scope.getAllCards();

});