import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  squadScore: faker.list.cycle(1, 1, 2, 2, 3),
  oppScore: faker.list.cycle(0, 1, 1, 2, 2),
});
