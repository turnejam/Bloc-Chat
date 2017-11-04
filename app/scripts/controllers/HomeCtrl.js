(function(){
    function HomeCtrl(Room, Message, $uibModal, $cookies, $scope) {
      this.rooms = Room.all;
      this.user = $cookies.get('blocChatCurrentUser');
      this.roomSelected = false;
      $scope.user = this.user;

      this.setRoom = function(roomId){
        this.currentRoom = roomId;
        this.currentMessages =  Message.getByRoomId(this.currentRoom.$id);
        this.user = $cookies.get('blocChatCurrentUser');
        this.roomSelected = true;
      };

      this.newRoom = function(){
          $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/create_room.html',
          controller: 'ModalCtrl as modal'
        });
      };

      this.message = function(){
        this.newMessage.username = this.user;
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.sentAt = Date.now();
        Message.send(this.newMessage);
        this.newMessage.content = '';
      }

      this.changeUser = function(){
        console.log('changing user');
        var modalInstance = $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/username_input.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static',
          keyboard: false
          });
        modalInstance.result.then(function(){
          $scope.$apply(function(){
          console.log('apply happening');
        });
          alert("Welcome, "+this.user);
              });
      };

    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', '$scope', HomeCtrl]);
})();
