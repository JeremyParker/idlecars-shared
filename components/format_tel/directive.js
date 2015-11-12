'use strict';

angular.module('idlecars')
.directive('formatTel', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var needToFormat = attrs.formatTel == 'true';

      element[0].oninput = function () {
        if (!needToFormat) { return }

        var value = element[0].value;
        // special-cases for users who add the right formatting themselves
        if (1 == value.length && '(' == value) { return }
        if (5 == value.length && ')' == value.slice(-1)) { return }
        if (10 == value.length && '-' == value.slice(-1)) { return }
        if (6 == value.length && (' ' == value.slice(-1) || '-' == value.slice(-1))) { return }

        value = value.replace(/[^0-9]/g, '');

        switch (value.length) {
          case 0:
            break;
          case 1:
          case 2:
          case 3:
            value = '(' + value;
            break;
          case 4:
          case 5:
          case 6:
            value = '(' + value.substr(0, 3) + ') ' + value.substr(3);
            break;
          default:
            value = '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6);
        }
        element[0].value = value;
      }
    }
  };
});
