import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  firstName: attr('string'),
  gender: attr('string'),
  lastName: attr('string'),
  nicknames: attr(),
  teams: hasMany(), // necessary?
  // user: belongsTo(),
  // stats: hasMany(),
  handle() {
    return this.get('nicknames').length ? this.get('nicknames')[0]
      : this.get('firstName');
  },
});
