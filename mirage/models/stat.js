import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  game: belongsTo(),
  player: belongsTo(),
  point: belongsTo(),
});
