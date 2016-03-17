// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if ( this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.dequeue();
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function() {
    this.shift();
    this.playFirst();
  }

});