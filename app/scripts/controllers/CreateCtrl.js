(function(){
    function CreateCtrl($scope, $uibModal, $log) {
      var create = this;
      this.open = function () {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/scripts/templates/create_room.html',
        controller: 'ModalCtrl as modal',
        }
      });

      modalInstance.result.then(function (newRoom) {
      Room.add(newRoom);
      console.log(newRoom);
    });
      };

    angular
        .module('blocChat')
        .controller('CreateCtrl', ['Room', ['$uibModal' CreateCtrl]);
})();
