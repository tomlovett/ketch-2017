import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', { path: '/game/:game_id' }, function() {
    this.route('play');
    this.route('recap', function() {
      this.route('players');
      this.route('points');
    });
  });
  // edit
    // team
    // player
  // team
    // stats with link to new game
  // player
    // stats
});

export default Router;
