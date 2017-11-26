import Ember from 'ember';

const { computed: { alias, filterBy } } = Ember;

export default Ember.Controller.extend({
  team: alias('model'),
  men: filterBy('team.players', 'gender', 'm'),
  women: filterBy('team.players', 'gender', 'f'),

  actions: {

  },
});
