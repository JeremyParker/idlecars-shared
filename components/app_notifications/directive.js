'use strict';

angular.module('idlecars')
.directive('icAppNotifications', function () {
  return {
    templateUrl: 'shared/components/app_notifications/template.html',
    controller: 'appNotifications.controller',
  };
});
