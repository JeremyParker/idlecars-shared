'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($timeout) {
  var service = { messages: [] };

  service.push = function(message) {
    service.messages.push(message);

    // notification goes off automatically after 15s
    $timeout(function () { service.remove() }, 15000);
  }

  service.remove = function(index) {
    if (index) { service.messages.splice(index, 1) }
    else { service.messages.pop() }
  }

  return service;
})
