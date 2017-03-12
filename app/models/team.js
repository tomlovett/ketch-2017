import DS from 'ember-data';

const { attr, hasMany, Model } from DS;

export default Model.extend({
  alias: attr(),
  colors: attr(),
  metadata: attr(),
  name: attr(),
  nickname: attr(),
  players: hasMany(),
});
