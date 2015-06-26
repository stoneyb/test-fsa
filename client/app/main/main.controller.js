'use strict';

angular.module('iplocatorApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.latitude = 0.0;
    $scope.longitude = 0.0;
    $scope.awesomeThings = []

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
