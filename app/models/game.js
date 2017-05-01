import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  // gameMetadata: belongsTo(),
  squadScore: attr('number', { defaultValue: 0 }),
  oppScore: attr('number', { defaultValue: 0 }),
  points: hasMany(),
  squad: belongsTo('team'),
  opponent: belongsTo('team'),
});
