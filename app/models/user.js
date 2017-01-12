import DS from 'ember-data';

export default DS.Model.extend({
  authToken: DS.attr('string'),
  email: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  bimpie: DS.attr('boolean'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  profile: DS.belongsTo('profile'),
  aasmState: DS.attr('string'),
  deviceToken: DS.attr('string')
});
