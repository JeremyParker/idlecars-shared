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
        var initIndex = $scope.choices.indexOf($scope.selectedItem)

        if (initIndex > -1) { $scope.selectedIndex = initIndex }
        else { $scope.selectedIndex = 0 }

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
      maxHeight: '@',
    }
  };
});
