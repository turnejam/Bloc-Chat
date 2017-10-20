(function(){
  function Room($firebasearray){
    var Room = {};
    var ref = firebase.database().ref.child('rooms');
    var rooms = $firebasearray(ref);

    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebasearray', Room])
})();
