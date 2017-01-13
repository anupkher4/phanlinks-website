import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitUserData() {
      var store = this.get('store');
      var tokenManager = Ember.inject.service('auth-manager');

      var fname = this.get('firstName');
      var lname = this.get('lastName');
      var phone = this.get('phone');

      var _user = store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password'),
        passwordConfirmation: this.get('passwordConfirmation')
      });

      function failure(reason) {
        console.log('failure');
        debugger;
      }

      _user.save().then(function(user) {
        console.log('user success');
        debugger;

        tokenManager.authToken = user.data.authToken;

        var _profile = store.createRecord('profile', {
          userId: user.id,
          username: user.data.email,
          firstname: fname,
          lastname: lname,
          mobile: phone,
          sex: 'male',
          birthday: '1/1/2017',
          cid: '1234',
          avatarFileName: 'image.jpg',
          avatarContent: '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',
          avatarContentType: 'image/jpg'
        });

        _profile.save().then(function(profile) {
          console.log('profile success');
          debugger;
        }).catch(failure);

      }).catch(failure);
    }
  }
});
