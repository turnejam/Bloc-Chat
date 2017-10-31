(function(){
function UserNameCtrl($uibModalInstance, $cookies,){


this.setUserName = function(name){
  this.blocChatCurrentUser = name;
  $cookies.put('blocChatCurrentUser', name);
  $uibModalInstance.close();
  console.log("Username is" + this.blocChatCurrentUser)
}

}
  angular
  .module('blocChat')
  .controller('UserNameCtrl', ['$uibModalInstance', '$cookies', UserNameCtrl])
})();
