// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      // this.trigger('update', this);
      if ( this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue ended', function(song) {
      this.removeFirst();
    }, this);
    
  },

  playFirst: function() {
    this.at(0).play();
  },

  removeFirst: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  }

});