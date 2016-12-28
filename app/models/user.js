import DS from 'ember-data';

export default DS.Model.extend({
  authToken: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  profile: DS.belongsTo('profile'),
  aasmState: DS.attr(),
  deviceToken: DS.attr()
});
