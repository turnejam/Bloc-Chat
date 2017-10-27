(function(){
  function ModalCtrl($uibModalInstance, Room){
    var modal = this;

    modal.createRoom = function(){
      Room.add(modal.room.name)
      $uibModalInstance.close();
    };

    modal.cancel = function(){
      $uibModalInstance.dismiss('canceled');
    };
  };

  angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl])
})();
