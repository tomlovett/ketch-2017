import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(id) {
    return 'Player ${id}'
  },

  gender(id) {
    return id % 2 === 0 ? 'm' : 'f';
  },
});
