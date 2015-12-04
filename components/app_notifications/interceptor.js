'use strict';

angular.module('idlecars')
.factory('appNotificationInterceptor', function($q, AppNotificationService) {
  var interceptor = {};

  var pushNotifications = function (result) {
    var notifications = _notifications(result);
    for (var i = 0; i < notifications.length; i++) {
      AppNotificationService.push(notifications[i]);
    }
  }

  interceptor.responseError = function(rejection) {
    pushNotifications(rejection);
    return $q.reject(rejection);
  }

  interceptor.response = function (response) {
    pushNotifications(response);
    return response;
  }

  var _notifications = function(rejection) {
    if (!rejection.data) { return []; }

    return rejection.data._app_notifications || [];
  }

  return interceptor;
});
