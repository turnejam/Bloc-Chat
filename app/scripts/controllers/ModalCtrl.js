(function(){
  function ModalCtrl($uibModalInstance, Room){
    var $ctrl = this;

    $ctrl.name = name;

    $ctrl.submit = function(){
      $uibModalInstance.close($ctrl.name);
    };

    $ctrl.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
  .module('blocChat')
  .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})():
