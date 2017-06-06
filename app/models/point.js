import DS from 'ember-data';
import Ember from 'ember';

const {  Model, attr, belongsTo, hasMany } = DS;
const { computed: { filter } } = Ember;

export default Model.extend({
  players: hasMany(),
  game: belongsTo(),
  teamOneScore: attr('number'), // computed function
  teamTwoScore: attr('number'), // computed function
  scoredBy: belongsTo('team'),
  stats: hasMany(),
});
