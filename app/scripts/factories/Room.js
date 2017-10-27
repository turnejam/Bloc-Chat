(function() {
  function Room($firebaseArray) {
    var Room = {};

    var ref = firebase.database().ref().child("rooms");

    var rooms = $firebaseArray(ref);
    Room.all = rooms;

    Room.add = function(room){
      Room.all.$add(room);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();


//.then(function(ref){
  //var id = ref.key;
  //console.log('added record with id '+id);
  //list.$indexFor(id);
//});
