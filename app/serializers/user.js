import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    deviceToken: 'deviceToken'
  },
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  serialize: function(snapshot, options) {
    var json = {
      email: snapshot.attr('email'),
      password: snapshot.attr('password'),
      password_confirmation: snapshot.attr('passwordConfirmation')
    };
    options.includeId = false;
    return json;
  }
});
