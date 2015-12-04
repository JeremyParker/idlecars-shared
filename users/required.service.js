'use strict';

angular.module('idlecars')
.factory('UserRequiredService', function (UserService) {
  var service = {};

  var _nextMissingDoc = function (user) {
    for (var key in docOrder) {
      if (!user[key]) {
        return docOrder[key];
      }
    }
    return null;
  }

  var docOrder = {
    email: 'user.onboarding.email',
    first_name: 'user.onboarding.firstname',
    last_name: 'user.onboarding.lastname',
  }

  service.requiredDocState = function(user) {
    if (user) {
      return UserService.get().then(function (user) {
        return _nextMissingDoc(user);
      })
    }
    else {
      return _nextMissingDoc(user);
    }
  }

  return service;
})
