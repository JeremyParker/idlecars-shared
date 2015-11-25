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

      var getIndex = function () {
        var choices = $scope.choices;
        var model = $scope.ngModel;

        for (var i = 0; i < choices.length; i++) {
          if (choices[i].key == model || choices[i].value == model) {
            return i;
          }
        };
        return 0;
      }

      var loadModel = function (newModel, oldModel) {
        if ($scope.choices) {
          $scope.selectedIndex = getIndex();
          $scope.ngModel = $scope.choices[$scope.selectedIndex].key;
        };
      }

      $scope.$watch('ngModel', loadModel);

      $scope.click = function (index) {
        $scope.selectedIndex = index;
        $scope.ngModel = $scope.choices[index].key;
      }
    },
    scope: {
      choices: '=',
      ngModel: '=',
      maxHeight: '@',
    }
  };
});
