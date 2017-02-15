var app = angular.module("app", []);

app.controller("BeerCtrl", ['$scope', ($scope) => {
    var beers = [
        {
            Appearance: 'Appearance 1',
            Aroma: 'Aroma 1',
            Flavour: 'Flavour 1',
            MouthFeel: 'MouthFeel 1',
            Strength: 'Strength 1',
            Style: 'Style 1',
            Brewery: 'Brewery 1'
        },
        {
            Appearance: 'Appearance 2',
            Aroma: 'Aroma 2',
            Flavour: 'Flavour 2',
            MouthFeel: 'MouthFeel 2',
            Strength: 'Strength 2',
            Style: 'Style 2',
            Brewery: 'Brewery 2'
        }
    ];

    $scope.beers = beers;
}]);