(function() {
  function Room($firebaseArray) {
    var Room = {};
    var room = {number:name};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    console.log(rooms);
    Room.all = rooms;

    Room.add = function(room){
      Room.all.$add({room}).then(function(ref){
        var id = ref.key;
        console.log('added record with id '+id);
        list.$indexFor(id);
      });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
