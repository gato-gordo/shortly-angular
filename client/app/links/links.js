angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {content: "unassigned"};
  $scope.getLinks = function(){
  	return Links.getLinks();
  }
  $scope.getLinks()
  .then(function(resp){
    console.log("from promise (next line)")
    console.dir(resp)
    $scope.data = resp;
  });
});
