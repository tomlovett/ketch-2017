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
  // player - base: name
  // stats
  // games - points
  // edit
  // create
  // team - name, primary, secondary
  // player - first, last, gender, nicknames

  this.route('create', function() {
    this.route('team');
  });
});

export default Router;
