'use strict';

angular.module('idlecars')
.controller('user.controller', function ($scope, $rootScope, $timeout, UserService, AppUserService) {
  UserService.get().then(function (user) {
    $scope.user = angular.copy(user);
    $scope.validateForm();
  })

  $rootScope.navSave = function() {
    UserService.patch($scope.$$childHead.user).then(AppUserService.userUpdated)
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }
})
