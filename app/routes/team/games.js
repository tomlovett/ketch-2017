import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const currentTeam = this.modelFor('team');

    return this.get('store').query('game', {
      filter: {
        team: currentTeam.get('alias'),
      }
    })
  }
});
