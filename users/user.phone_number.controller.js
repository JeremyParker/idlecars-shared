'use strict';

angular.module('idlecars')
.controller('user.phoneNumber.controller', function ($scope) {
  $scope.fields = [{
    label: 'Your phone number',
    placeholder: '(555) 555-5555',
    name: 'phone_number',
    type: 'tel',
    formatInput: 'tel',
    pattern: '[^\\d]*\\d{3}[^\\d]*\\d{3}[^\\d]*\\d{4}$',
    maxlength: '14',
    autoFocus: true,
  }];
})
