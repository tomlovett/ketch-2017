import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({

  serialize: function(deserialized) {
    if (Ember.typeOf(deserialized) === 'array') {
      return deserialized;
    } else {
      return [];
    }
  },

  deserialize: function(serialized) {
    var deserialized;

    switch ( Ember.typeOf(serialized) ) {
      case 'array':
        deserialized = serialized;
        break;
      case 'string':
        deserialized = serialized.split(',').map(
          function(item) { Ember.$.trim(item);
        });
        break;
      default:
        deserialized = [];
    }

    return deserialized;
  }

});
