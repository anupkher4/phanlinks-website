import Ember from 'ember';

export default Ember.Service.extend({
  authToken: null,

  setToken(token) {
    this.set('authToken', token);
  }
});
