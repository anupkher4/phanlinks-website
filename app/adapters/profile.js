import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  tokenManager: Ember.inject.service('auth-manager'),
  headers: Ember.computed('tokenManager.authToken', function() {
    return {
      "Content-Type": "application/json",
      "Authorization": this.get('tokenManager.authToken')
    };
  })
});
