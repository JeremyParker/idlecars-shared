'use strict';

angular.module('idlecars')

.controller('newUser.controller', function ($scope, $rootScope, $timeout, UserService) {
  $scope.user = {};

  UserService.get().then(function (user) {
    $scope.user = user;
    $scope.validateForm();
  })

  $scope.validateForm = function() {
    $timeout(function () { $rootScope.navNextEnabled = $scope.$$childHead.fieldForm.$valid });
  }

  $rootScope.navGoNext = function() {
    UserService.patch($scope.user).then($scope.$$childHead.postPatch);
  }
})

.controller('newUser.email.controller', function ($scope, AppUserService, NavbarService) {
  $scope.fields = [{
    label: 'Enter your email address',
    placeholder: 'email@address.com',
    name: 'email',
    type: 'email',
    maxlength: '254',
    autoFocus: true,
  }];

  $scope.postPatch = AppUserService.emailEntered;

  NavbarService.validateInit($scope);
})

.controller('newUser.firstname.controller', function ($scope, AppUserService, NavbarService) {
  $scope.fields = [{
    placeholder: 'First name',
    name: 'first_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.postPatch = AppUserService.firstnameEntered;

  NavbarService.validateInit($scope);
})

.controller('newUser.lastname.controller', function ($scope, AppUserService, NavbarService) {
  $scope.fields = [{
    placeholder: 'Last name',
    name: 'last_name',
    type: 'text',
    maxlength: '30',
    autoFocus: true,
  }];

  $scope.postPatch = AppUserService.lastnameEntered;

  NavbarService.validateInit($scope);
})
