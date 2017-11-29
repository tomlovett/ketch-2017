import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  alias: '',
  name: '',
  primary: null,
  secondary: null,

  team: {},

  nameTooLong: computed('name', function() {
    return this.get('name').length > 16;
  }),

  colors: [
    'red',
    'red-orange',
    'orange',
    'yellow-orange',
    'yellow',
    'yellow-green',
    'green',
    'blue',
    'light-blue',
    'dark-blue',
    'pink',
    'purple',
    'white',
    'brown',
    'black'
  ],

  actions: {
    save() {
      const team = this.get('team');

      this.store.createRecord('team', team, function(teamRecord) {
          this.transitionTo('team/roster', teamRecord);
        });
      // calling an error, that createRecord.
    }
  }
});
 
  // gender: computed('radioGender', function() {
  //   return this.get('radioGender').charAt(0).toLowerCase();
  // }),
