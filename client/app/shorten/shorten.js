angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  
  $scope.link = {name:"hell"};
  $scope.addLink = function(link){
    console.log(link);
    $scope.link = Shorten.addLink(link);
  };

  // ng-click="$scope.addLink($scope.link)"

});
