import DS from 'ember-data';

const { attr, belongsTo, Model } from DS;

export default Model.extend({
  game: belongsTo(),
  player: belongsTo(),
  point: belongsTo(),
  type: attr(),
});
