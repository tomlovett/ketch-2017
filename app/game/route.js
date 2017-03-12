import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.get('store').findRecord('game', params.game_id);
  }
});
