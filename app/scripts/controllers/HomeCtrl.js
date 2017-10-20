(function(){
    function HomeCtrl(Room) {
      //try the thing with pushing the array?
      this.room = Room;
      this.rooms = Room.all;
      };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
