import DS from 'ember-data';
import Ember from 'ember';

const {  Model, attr, belongsTo, hasMany } = DS;
const { computed: { alias } } = Ember;

export default Model.extend({
  game: belongsTo(),
  opp: alias('game.opponent'),
  oppScore: attr('number'),
  players: hasMany(),
  scoredBy: belongsTo('team'),
  squad: alias('game.squad'),
  squadScore: attr('number'),
  stats: hasMany(),
});
