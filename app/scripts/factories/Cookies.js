(function(){
  function BlocChatCookies($cookies, $uibModal){
    console.log("Running!");
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === ''){
      $uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: '/templates/username_input.html',
      controller: 'UserNameCtrl as user',
      backdrop: 'static',
      keyboard: false
      });
    };

  }
  angular
  .module('blocChat')
  .run(['$cookies', '$uibModal', BlocChatCookies])
})();
