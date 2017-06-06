import Ember from 'ember';

const { computed: { filter, map, sum } } = Ember;

export default Ember.Component.extend({
  plusMinus: sum('pointOutcomes'),
  pointOutcomes: map('pointsPlayed', function(point) {
    return this.get('point.scoreBy') === this.get('teamOne') ? 1 : -1;
  }),
  pointsPlayed: filter('game.points', function(point) {
    return this.get('point.players').indexOf(this.get('player')) > -1;
  }),
});
