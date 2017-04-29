import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('model hook executed');
    return this.store.findRecord('game', params.game_id);
  },

  setupController(controller, model) {
    // fetchPlayers(); // by team
    this.fetchSquad();
    controller.set('opponent', {
      name: 'Douchebags United',
    });
  },

  fetchPlayers() {
    const controller = this.get('controller');
    this.store.query('player', {
      team_id: 'team_id'
    }).then((players) => {
      controller.set('squad', players);
    });
  },

  fetchSquad() {
    const controller = this.get('controller');
    debugger;
    this.store.findRecord('team', 0).then((team) => {
      controller.set('squad', team);
    });
    // in reality, this.query by game.squad
  },
});
