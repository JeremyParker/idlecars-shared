'use strict';

angular.module('idlecars')
.controller('user.controller', function ($scope, $rootScope, $timeout, UserService, AppUserService, NavbarService) {
  UserService.get().then(function (user) {
    $scope.user = angular.copy(user);
  })

  $rootScope.navSave = function() {
    AppUserService.userUpdated($scope.$$childHead.user)
  }

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid; })
  }

  NavbarService.validateInit($scope, true);
})
