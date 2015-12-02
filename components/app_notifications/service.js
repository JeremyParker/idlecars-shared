'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($timeout) {
  var service = { messages: [] };

  service.push = function(message) {
    service.messages.push(message);

    // notification goes off automatically after 15s
    $timeout(function () { service.messages.pop() }, 15000);
  }

  service.remove = function(message) {
    var index = service.messages.indexOf(message);
    if (index > -1) { service.messages.splice(index, 1) }
    else { service.messages = [] }
  }

  return service;
})
