'use strict';

angular.module('idlecars')
.controller('modal.controller', function ($scope, $rootScope) {
  $scope.closeModal = function() {
    $scope.modal_show = false;
  };
});
