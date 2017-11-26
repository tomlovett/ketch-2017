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
    this.route('settings');
  });
  this.route('team', { path: '/team/:team_id' }, function() {
    this.route('roster');
  });
  // team - base: name, newGame - roster, history, stats
    // gameHistory
    // stats
  // player - base: name
    // stats

  // create
    // team
    // player
});

export default Router;
