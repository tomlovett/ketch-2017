import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(id) {
    return 'Team ${id}'
  }
});
