import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },

  afterModel(model) {
    model.get('squad.players').forEach((player) => {
      player.set('onField', false);
    });
  }
});
