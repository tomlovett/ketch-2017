import Ember from 'ember';

const { computed: { alias, filterBy, uniq } } = Ember;

export default Ember.Controller.extend({
  game: alias('model'),
  squad: alias('game.squad'),
  players: alias('squad.players'),
  opponent: alias('game.opponent'),
  points: alias('game.points'),

  men: filterBy('players', 'gender', 'm'),
  benchMen: filterBy('men', 'onField', false),
  fieldMen: filterBy('men', 'onField', true),

  women: filterBy('players', 'gender', 'f'),
  benchWomen: filterBy('women', 'onField', false),
  fieldWomen: filterBy('women', 'onField', true),

  onField: uniq('fieldMen', 'fieldWomen'),
  inPlay: false,
  point: null,

  liveStat: null,
  livePlayer: null,

  actions: {
    clearLine() {
      if (this.get('onField.length') > 0) {
        this.get('onField').forEach((player) => {
          player.toggleProperty('onField');
        });
      }
    },

    clickPlayer(player) {
      if (this.get('inPlay')) {
        if (this.get('livePlayer')) {
          this.set('livePlayer', null);
        } else {
          this.set('livePlayer', player);
          this.recordStat();
        }
      } else {
        this.send('sub', player);
      }
    },

    clickStat(type) {
      if (this.get('liveStat')) {
        this.set('liveStat', null);
      } else {
        this.set('liveStat', type);
      }
      this.recordStat();
    },

    recordScore(teamId) {
      const point = this.get('point');
      const game = this.get('game');

      if (teamId === this.get('squad.id')) {
        this.incrementProperty('game.squadScore');
        point.incrementProperty('squadScore');
        point.set('scoredBy', this.get('squad'));
      } else {
        this.incrementProperty('game.oppScore');
        point.incrementProperty('oppScore');
        point.set('scoredBy', this.get('opponent'));
      }

      point.save().then(() => {
        game.get('points').pushObject(point);
        game.save();
        this.set('point', null);
        this.toggleProperty('inPlay');
      });
    },

    setLine() {
      const point = this.get('store').createRecord('point', {
        recorded: Date.now(),
        oppScore: this.get('game.oppScore'),
        players: this.get('onField'),
        squadScore: this.get('game.squadScore'),
      });
      this.toggleProperty('inPlay');
      point.save().then(() => {
        this.set('point', point);
      });
    },

    sub(player) {
      player.toggleProperty('onField');
    },
  },

  recordStat() {
    if (this.get('liveStat') && this.get('livePlayer')) {
      const stat = this.get('store').createRecord('stat', {
        player: this.get('livePlayer'),
        type: this.get('liveStat'),
        point: this.get('point'),
        game: this.get('game'),
      });

      stat.save().then(() => {
        this.setProperties({
          livePlayer: null,
          liveStat: null
        });
      });
    }
  },
});
