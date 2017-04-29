import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  inPlay: false,
  // bench: computed('squad.@each.onField', function() {
  //   this.get('squad').filter(function(player) {
  //     return !this.get('onField')(player);
  //   });
  // }),
  // field: computed('squad.@each.onField', function() {
  //   this.get('squad').filter(function(player) {
  //     return this.get('player.onField');
  //   });
  // }),

  benchMen: computed('squad.@each.onField', function() {
    this.get('squad').filter(function(player) {
      return !this.get('player.onField') && this.get('player.gender') === 'm';
    });
  }),
  fieldMen: computed('squad.@each.onField', function() {
    this.get('squad').filter(function(player) {
      return this.get('player.onField') && this.get('player.gender') === 'm';
    });
  }),
  benchWomen: computed('squad.@each.onField', function() {
    this.get('squad').filter(function(player) {
      return !this.get('player.onField') && this.get('player.gender') === 'f';
    });
  }),
  fieldWomen: computed('squad.@each.onField', function() {
    this.get('squad').filter(function(player) {
      return this.get('player.onField') && this.get('player.gender') === 'f';
    });
  }),
  game: computed('model.[]', function() {
    console.log('game set in controller: ', this.get('model'));
    // returning null; appears call is coming after initial render, and not being refreshed
    return this.get('model') || { squadScore: 14, oppScore: 10 };
  }),
  squad: null,
  opponent: null,

  actions: {
    recordScore(team) {
      this.send('toggleInPlay');
    },
    toggleInPlay() {
      this.toggleProperty('inPlay');
    },
    // clearLine
    // doneSubs
    // move
    // recordScore
    // recordStat
  },
});
