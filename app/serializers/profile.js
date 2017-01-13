import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  serialize: function(snapshot, options) {
    var json = {
      user_id: snapshot.attr('userId'),
      username: snapshot.attr('username'),
      firstname: snapshot.attr('firstname'),
      lastname: snapshot.attr('lastname'),
      cid: snapshot.attr('cid'),
      birthday: snapshot.attr('birthday'),
      sex: snapshot.attr('sex'),
      avatar: {
        filename: snapshot.attr('avatarFileName'),
        content: snapshot.attr('avatarContent'),
        content_type: snapshot.attr('avatarContentType')
      }
    };
    options.includeId = false;
    return json;
  }
});
