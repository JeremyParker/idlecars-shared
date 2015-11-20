'use strict';

angular.module('idlecars')
.directive('singleChoice', function () {
  return {
    templateUrl: 'shared/components/single_choice/template.html',
    controller: function ($scope) {
      if ($scope.choices) {
        $scope.selectedIndex = 0;
        $scope.selectedItem = $scope.choices[$scope.selectedIndex];

        $scope.click = function (index) {
          $scope.selectedIndex = index;
          $scope.selectedItem = $scope.choices[index];
        }
      };
    },
    scope: {
      choices: '=',
      selectedItem: '=',
    }
  };
});
