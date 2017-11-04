(function(){
  function BlocChatCookies($cookies, $uibModal, Room){
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === ''){
      var modalInstance = $uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: '/templates/username_input.html',
      controller: 'ModalCtrl as modal',
      backdrop: 'static',
      keyboard: false
      });
    modalInstance.result.then(function(){
      currentUser = $cookies.get('blocChatCurrentUser');
      alert("Welcome, "+currentUser);
          });
    };
  };

  angular
  .module('blocChat')
  .run(['$cookies', '$uibModal', 'Room', BlocChatCookies])
})();
