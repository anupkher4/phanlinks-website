import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  username: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  cid: DS.attr(),
  birthday: DS.attr(),
  sex: DS.attr(),
  avatar: DS.attr(),
  avatarFileName: DS.attr(),
  avatarFileType: DS.attr(),
  avatarContent: DS.attr(),
  avatarContentType: DS.attr()
});
