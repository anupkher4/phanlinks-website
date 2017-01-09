import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    deviceToken: 'deviceToken'
  },
  serialize: function(snapshot, options) {
    var json = {
      user: {
        email: snapshot.attr('email'),
        password: snapshot.attr('password'),
        password_confirmation: snapshot.attr('passwordConfirmation')
      }
    };

    options.includeId = false;

    return json;
  },
  normalize(modelClass, hash, prop) {
    // prop is 'user'
    // hash is the response payload
    // modelClass is App.User
    return this._super(...arguments);
  }
});
