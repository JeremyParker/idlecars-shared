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
      templateUrl: 'app/users/form.html',
      controller: 'newUser.phoneNumber.controller',
    })

    .state('newUser.password', {
      url: '/password',
      templateUrl: 'app/users/form.html',
      controller: 'newUser.password.controller',
    })

})
