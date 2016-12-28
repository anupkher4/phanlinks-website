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
        console.log(`${user}`);
      }

      function failure(reason) {
        console.log('failure');
        console.log(`${reason.toString()}`);
      }

      _user.save();

      var created = store.peekRecord('user', 4);
    }
  }
});
