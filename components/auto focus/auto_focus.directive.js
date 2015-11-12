'use strict';

angular.module('idlecars')
.directive('autoFocus', function ($timeout) {
  var linker = function (scope, element) {
    if (scope.trigger === 'true') {
      $timeout(function () {element[0].focus()})
    };
  }
  return {
    scope: {
      trigger: '@autoFocus',
    },
    link: linker,
  }
})
