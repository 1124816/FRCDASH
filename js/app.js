var app = angular.module('robotics', ['ui.router']);
console.log("ho");
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'template/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);


app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.hide = [true,false,true,false];
  $scope.htext = ["+","-","+","-"];
  $scope.fhide = function(val) {
    if($scope.htext[val] == "+") {
      $scope.htext[val] = "-";
    } else {
      $scope.htext[val] = "+";
    }
    $scope.hide[val] = !$scope.hide[val];
  }
}]);
