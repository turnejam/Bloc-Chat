(function(){
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.user = $cookies.get('blocChatCurrentUser');

      this.setRoom = function(roomId){
        this.currentRoom = roomId;
        this.currentMessages =  Message.getByRoomId(this.currentRoom.$id);
        console.log(this.currentMessages)
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
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
