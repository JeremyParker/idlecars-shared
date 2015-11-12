'use strict';

angular.module('idlecars')
.directive('saveScroll', function ($interval, $state, ScrollService) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var position = ScrollService.scrollPosition[$state.current.name] || 0;

      var scrollToPosition = $interval(function () {
        element[0].scrollTop = position;

        if (element[0].scrollTop >= position) {
          $interval.cancel(scrollToPosition);
        };
      }, 1)

      element[0].onscroll = function () {
        ScrollService.scrollPosition[$state.current.name] = element[0].scrollTop;
      }
    },
  };
});
