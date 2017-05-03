import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  game: computed.alias('model'),
  squad: computed.alias('model.squad'),
  players: computed.alias('squad.players'),
  opponent: computed.alias('model.opponent'),
  point: null,

  men: computed.filterBy('players', 'gender', 'm'),
  benchMen: computed.filterBy('men', 'onField', false),
  fieldMen: computed.filterBy('men', 'onField', true),

  women: computed.filterBy('players', 'gender', 'f'),
  benchWomen: computed.filterBy('women', 'onField', false),
  fieldWomen: computed.filterBy('women', 'onField', true),

  onField: computed.uniq('fieldMen', 'fieldWomen'),
  inPlay: false,
  point: null,

  liveStat: null,
  livePlayer: null,

  actions: {
    clearLine() {
      debugger;
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

      if (teamId === this.get('squad.id')) {
        this.incrementProperty('game.squadScore');
        point.incrementProperty('squadScore');
        point.set('scoredBy', this.get('squad'));
      } else {
        this.incrementProperty('game.oppScore');
        point.incrementProperty('oppScore');
        point.set('scoredBy', this.get('opponent'));
      }

      point.save();
      this.set('point', null);
      this.toggleProperty('inPlay');
    },

    setLine() {
      const point = this.get('store').createRecord('point', {
        recorded: Date.now(),
        oppScore: this.get('game.oppScore'),
        players: this.get('onField'),
        squadScore: this.get('game.squadScore'),
      });
      this.toggleProperty('inPlay');
      point.save();
      this.set('point', point);
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
      stat.save();
      this.set('livePlayer', null);
      this.set('liveStat', null);
    }
  },
});
