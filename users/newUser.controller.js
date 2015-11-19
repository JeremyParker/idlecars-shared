'use strict';

angular.module('idlecars')

.controller('newUser.controller', function ($scope, $rootScope) {
  $scope.user = {};

  $scope.validateForm = function() {
    $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid;
  }
})

.controller('newUser.email.controller', function ($scope, $rootScope, UserService, AppUserService) {
  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    UserService.patch($scope.user).then(AppUserService.emailEntered)
  }
})

.controller('newUser.firstname.controller', function ($scope, $rootScope, UserService, AppUserService) {
  $scope.fields = [{
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    UserService.patch($scope.user).then(AppUserService.firstnameEntered)
  }
})

.controller('newUser.lastname.controller', function ($scope, $rootScope, UserService, AppUserService) {
  $scope.fields = [{
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $rootScope.navGoNext = function() {
    UserService.patch($scope.user).then(AppUserService.lastnameEntered)
  }
})
