import DS from 'ember-data';

const { attr, hasMany, Model } from DS;

export default Model.extend({
  alias: attr(),
  firstName: attr(),
  lastName: attr(),
  nicknames: attr(),
  teams: hasMany(),
  user: belongsTo(),
});
