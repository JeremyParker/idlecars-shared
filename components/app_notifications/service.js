'use strict';

angular.module('idlecars')
.factory('AppNotificationService', function ($timeout) {
  var service = { messages: [] };

  service.push = function(message) {
    var new_timer = $timeout(function () { service.messages.pop() }, 15000);
    service.messages.unshift({timer: new_timer, content: message});
  }

  service.remove = function(index) {
    $timeout.cancel(service.messages[index].timer);
    service.messages.splice(index, 1);
  }

  return service;
})
