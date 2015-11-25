'use strict';

angular.module('idlecars')
.directive('singleChoice', function () {
  return {
    templateUrl: 'shared/components/single_choice/template.html',
    controller: function ($scope) {
      if ($scope.maxHeight) {
        // the basic height of each line is 48px and border is 2px
        $scope.maxHeight = 48 * $scope.maxHeight + 2;
      };

      if ($scope.choices) {
        var initIndex = $scope.choices.indexOf($scope.ngModel)

        if (initIndex > -1) { $scope.selectedIndex = initIndex }
        else { $scope.selectedIndex = 0 }

        $scope.ngModel = $scope.choices[$scope.selectedIndex];

        $scope.click = function (index) {
          $scope.selectedIndex = index;
          $scope.ngModel = $scope.choices[index];
        }
      };
    },
    scope: {
      choices: '=',
      ngModel: '=',
      maxHeight: '@',
    }
  };
});
