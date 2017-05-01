import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  alias: attr('string'),
  firstName: attr('string'),
  gender: attr('string'),
  lastName: attr('string'),
  nicknames: attr(),
  teams: hasMany(), // necessary?
  // user: belongsTo(),
  // stats: hasMany(),
});
