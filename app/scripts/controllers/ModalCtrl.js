(function(){
  function ModalCtrl($uibModalInstance, Room, $cookies){
    var modal = this;

    modal.createRoom = function(){
      Room.add(modal.room.name)
      $uibModalInstance.close();
    };

    modal.cancel = function(){
      $uibModalInstance.dismiss('canceled');
    };

  modal.setUserName = function(name){
    $cookies.put('blocChatCurrentUser', name);
    $uibModalInstance.close();
    Room.user = $cookies.get('blocChatCurrentUser');
  };
};
  angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModalInstance', 'Room', '$cookies', ModalCtrl])
})();
