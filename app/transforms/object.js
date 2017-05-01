import DS from 'ember-data';
import Ember from 'ember';

const { $ } = Ember;
const { camelize, underscore } = Ember.String;

export default DS.Transform.extend({

  deserialize(raw) {
    return this._transformObjectKeys(raw, camelize);
  },

  serialize(raw) {
    return this._transformObjectKeys(raw, underscore);
  },

  _transformObjectKeys(raw, stringTransform) {
    if (!$.isPlainObject(raw)) {
      return {};
    }

    return Object.keys(raw).reduce((object, key) => {
      object[stringTransform(key)] = raw[key];

      return object;
    }, {});
  },

});
