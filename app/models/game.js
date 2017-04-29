import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  // gameMetadata: belongsTo(),
  squadScore: attr('number'),
  oppScore: attr('number'),
  points: hasMany(),
  squad: belongsTo('team'),
  opponent: belongsTo('team'),
});
