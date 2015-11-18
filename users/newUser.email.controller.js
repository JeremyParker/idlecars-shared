'use strict';

angular.module('idlecars')
.controller('newUser.email.controller', function ($scope, $rootScope, AppUserService) {
  $scope.user = {};

  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    AppUserService.emailEntered()
  }

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.fieldForm.$valid;
  }
});
