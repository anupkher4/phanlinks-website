import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitUserData() {
      var store = this.get('store');

      var _user = store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password'),
        passwordConfirmation: this.get('passwordConfirmation')
      });

      function success(user) {
        console.log('success');
        debugger;
      }

      function failure(reason) {
        console.log('failure');
        debugger;
      }

      _user.save().then(success).catch(failure);
    }
  }
});
