import DS from 'ember-data';

const { attr, hasMany, Model } = DS;

export default Model.extend({
  alias: attr('string'),
  // colors: attr(),
  // teamMetadata: belongsTo(),
  name: attr('string'),
  nickname: attr('string'),
  players: hasMany(),
});
