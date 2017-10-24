(function(){
    function HomeCtrl(Room, $uibModal) {
      this.room = Room;
      this.rooms = Room.all;
      };

      this.createRoom = function(){
        $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: '/scripts/templates/create_room.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        });
      };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
