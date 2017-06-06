import Ember from 'ember';

const { computed: { filterBy }} = Ember;

export default Ember.Component.extend({
  teamOnePlayers: filterBy('point.players', function(player) {
    return teamOne.players.indexOf(player) > -1;
  }),
});
