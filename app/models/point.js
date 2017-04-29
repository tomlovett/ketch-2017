import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  players: hasMany(),
  game: belongsTo(),
});
