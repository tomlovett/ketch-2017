import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  primary: faker.list.cycle('purple', 'green'),
  secondary: faker.list.cycle('white', 'blue'),
  name: faker.list.cycle('Purple Jerks', 'Drunk in Space'),
});
