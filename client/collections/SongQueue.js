// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);    
    this.on('ended', this.ended, this);
    
  },

  playFirst: function() {
    this.at(0).play();  
  },

  enqueue: function() {
    if ( this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    if ( song === this.at(0) ) {
      this.ended();
    } else {
      this.remove(song);
    }
  },

  ended: function() {
    this.shift();
    if ( this.length === 0 ) {
      this.trigger('stop');
    } else {
      this.playFirst();
    }
  }

});