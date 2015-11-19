'use strict';

angular.module('idlecars')
.config(function ($stateProvider) {

  $stateProvider

    .state('newUser', {
      abstract: true,
      url: '/users/new',
      data: {navbarInfo: {title: 'Sign up', enableBack: true, enableNext: true}},
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          controller: function($scope) {
            $scope.user = {};
          },
          template: '<ui-view class="flex"/>',
        }
      },
    })

    .state('newUser.phoneNumber', {
      url: '/phone_number',
      templateUrl: 'shared/users/form.html',
      controller: 'newUser.phoneNumber.controller',
    })

    .state('newUser.password', {
      url: '/password',
      templateUrl: 'shared//users/form.html',
      controller: 'newUser.password.controller',
    })

    .state('newUser.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableNext: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'newUser.email.controller',
    })

    .state('user', {
      abstract: true,
      url: '/users',
      views: {
        'navbar@': {
          templateUrl: 'components/navbar/navbar_main.html',
          controller: 'navbarMain.controller',
        },
        'content@': {
          template: '<ui-view class="flex"/>',
          controller: 'user.controller',
        }
      },
    })

    .state('user.email', {
      url: '/email',
      data: {navbarInfo: {title: 'Email', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.email.controller',
    })

    .state('user.phonenumber', {
      url: '/phonenumber',
      data: {navbarInfo: {title: 'Phone number', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.phoneNumber.controller',
    })

    .state('user.firstname', {
      url: '/firstname',
      data: {navbarInfo: {title: 'First name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.firstname.controller',
    })

    .state('user.lastname', {
      url: '/lastname',
      data: {navbarInfo: {title: 'Last name', enableBack: true, enableSave: true}},
      templateUrl: 'shared/users/form.html',
      controller: 'user.lastname.controller',
    })
})
