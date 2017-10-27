(function(){
  function Message($firebaseArray){
    var Message = {};
    var ref = firebase.database().ref().child('messages');

    var messages = $firebaseArray(ref)
    Message.all = messages;

    Message.getByRoomId(roomId){
      return $firebaseArray(ref.orderbyChild('roomId').equalTo(roomId));
    }

    return Message;
  }

  angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message]);
})();
