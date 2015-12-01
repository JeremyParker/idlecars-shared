'use strict';

angular.module('idlecars')
.directive('formatNum', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var needToFormat = attrs.formatNum == 'true';

      element[0].oninput = function () {
        if (!needToFormat) { return }

        var value = element[0].value;
        value = value.replace(/[^0-9]/g, '');

        var counter = 0;
        var new_value = '';

        for (var i = value.length - 1; i >= 0; i--) {
          if (counter%3 == 0 && counter) {
            new_value = ',' + new_value;
          };

          new_value = value[i] + new_value;

          counter ++;
        };

        // TODO: this is very limited. find another way to set ng-model value
        if (!value) {
          scope.user[scope.field.name] = null;
        }
        else {
          scope.user[scope.field.name] = value;
        }

        $timeout(function () { element[0].value = new_value })
      }
    }
  };
});
