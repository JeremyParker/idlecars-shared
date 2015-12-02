'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($timeout) {
  var service = { messages: [] };

  service.push = function(message) {
    service.messages.push(message);

    // notification goes off automatically after 15s
    $timeout(function () { service.timeout(message) }, 7000);
  }

  service.timeout = function (message) {
    var index = service.messages.lastIndexOf(message);
    if (index > -1) { service.remove(index) };
  }

  service.remove = function(index) {
    service.messages.splice(index, 1);
  }

  return service;
})
