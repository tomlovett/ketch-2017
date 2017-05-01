import Ember from 'ember';

export default Ember.Component.extend({
  onClickStat() {},

  actions: {
    clickBoo() {
      this.get('onClickStat')('boo');
    },

    clickGoldStar() {
      this.get('onClickStat')('goldStar');
    },
  },
});
