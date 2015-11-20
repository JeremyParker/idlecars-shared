'use strict';

angular.module('idlecars')
.directive('singleChoice', function () {
  return {
    templateUrl: 'shared/components/single_choice/template.html',
    controller: function ($scope) {
      $scope.select = 0;
      $scope.click = function (index) {
        $scope.select = index;
      }
    },
    scope: {
      choices: '=',
    }
  };
});
