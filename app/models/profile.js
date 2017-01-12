import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  username: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  cid: DS.attr('string'),
  birthday: DS.attr('string'),
  sex: DS.attr('string'),
  avatar: DS.attr('string'),
  avatarFileName: DS.attr('string'),
  avatarFileType: DS.attr('string'),
  avatarContent: DS.attr('string'),
  avatarContentType: DS.attr('string')
});
