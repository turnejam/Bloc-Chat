(function(){
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.currentRoom = {};

      this.currentMessages = {};

      this.setRoom = function(roomId){
        this.currentRoom = room; //?????
      };

      this.newRoom = function(){
          $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/create_room.html',
          controller: 'ModalCtrl as modal'
        });
      };

      
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
