import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  backgroundColor: null,
  players: null,
  sortedPlayers: computed.sort('players', 'sorting'),
  sorting: ['firstName', 'lastName'],
  onClick: function() {},

  actions: {
    click(player) {
      this.get('onClick')(player);
    }
  },
});
