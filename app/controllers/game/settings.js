import Ember from 'ember';

const { computed: { alias } } = Ember;

export default Ember.Controller.extend({
  game: alias('model'),
  squad: alias('game.squad'),
  opponent: alias('game.opponent'),

  actions: {
    cancelGame() {
      this.get('game').destroyRecord().then(() => {
        return;
        // transition out
      });
    },

    finishGame() {
      this.get('game').save.then(() => {
        return;
        // transition out
      });
    },
  }

});
