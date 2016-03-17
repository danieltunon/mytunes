// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if ( this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.removeFirst();
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  removeFirst: function() {
    // this.remove(song);
    this.shift();
    // check song left
    if (this.length > 0) {
      // if there is song left, playFirst
      this.playFirst();
    }
  }

});