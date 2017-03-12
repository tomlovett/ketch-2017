import Ember from 'ember';

export default Ember.Component.extend({
  backgroundColor: null,
  players: null,

  actions: {
    click(player) {
      this.send('click'); // either stats or subs
    }
  },
});
