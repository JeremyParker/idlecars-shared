'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($timeout) {
  var service = { messages: [] };

  service.push = function(message) {
    service.messages.push(message);

    // notification goes off automatically after 15s
    $timeout(function () { service.remove(message) }, 15000);
  }

  service.remove = function(message) {
    var index = service.messages.lastIndexOf(message);
    if (index > -1) { service.messages.splice(index, 1) }
  }

  return service;
})
