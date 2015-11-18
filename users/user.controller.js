'use strict';

angular.module('idlecars')
.controller('user.controller', function ($scope, $rootScope, AppUserService) {
  $scope.user = {};

  $rootScope.navSave = function() {
    AppUserService.userUpdated($scope.$$childHead.user)
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
})
