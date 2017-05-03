import DS from 'ember-data';

const {  Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  players: hasMany(),
  game: belongsTo(),
  oppScore: attr('number'),
  squadScore: attr('number'),
  scoredBy: belongsTo('team'),
  stats: hasMany(),
});
