'use strict';

angular.module('niApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/index.html',
    controller: 'IndexCtrl'
  });
}])

.controller('IndexCtrl', ['$scope','$location', 'DataService', function($scope, $location, DataService) {
    $('#country').autocomplete({
        data: DataService.list()
    });

    $(function(){
        $(document).attr("title", "Simple personal income tax and net salary calculator");
        $('meta[name=description]').remove();
        $('title').after( '<meta name="description" content="Estimate your net income in various countries or the gross salary you should ask for for the expected net salary">' );
    });

    $scope.country = '';
    $scope.countries = DataService.countries;
    
    $scope.selectCountry = function () {
        var url = DataService.getUrl($scope.country);
        if($scope.country.length && url!=null) {
            $location.url(url);
        }
    };
}]);
